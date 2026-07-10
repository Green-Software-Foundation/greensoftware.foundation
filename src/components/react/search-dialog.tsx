import * as Dialog from "@radix-ui/react-dialog";
import {
  Search,
  X,
  FileText,
  BookOpen,
  Newspaper,
  ScrollText,
  Loader2,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

interface PagefindResult {
  url: string;
  meta?: {
    title?: string;
    image?: string;
  };
  excerpt?: string;
  sub_results?: {
    url: string;
    title: string;
    excerpt: string;
  }[];
}

interface PagefindResponse {
  results: { data: () => Promise<PagefindResult> }[];
}

interface PagefindAPI {
  search: (query: string) => Promise<PagefindResponse>;
  init: () => Promise<void>;
}

const contentTypeIcons: Record<string, typeof FileText> = {
  article: Newspaper,
  story: BookOpen,
  research: ScrollText,
  page: FileText,
};

function getContentType(url: string): string {
  if (url.startsWith("/articles/")) return "article";
  if (url.startsWith("/stories/")) return "story";
  if (url.startsWith("/policy/research/")) return "research";
  return "page";
}

function ContentTypeBadge({ type }: { type: string }) {
  const Icon = contentTypeIcons[type] || FileText;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent-lightest-2 px-2 py-0.5 text-xs font-medium text-primary-dark">
      <Icon className="size-3" />
      {type}
    </span>
  );
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindAPI | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Load PageFind on first open (bypasses Vite's import interception)
  useEffect(() => {
    if (!open || pagefind) return;
    (async () => {
      try {
        const w = window as unknown as { pagefind?: PagefindAPI };
        if (!w.pagefind) {
          // Use new Function to create a dynamic import that Vite cannot analyse
          const loadPagefind = new Function(
            "return import('/pagefind/pagefind.js')",
          );
          w.pagefind = await loadPagefind();
          await w.pagefind!.init();
        }
        setPagefind(w.pagefind!);
      } catch {
        console.warn(
          "PageFind index not found — run `npm run build` to generate it.",
        );
      }
    })();
  }, [open, pagefind]);

  // Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const doSearch = useCallback(
    async (searchQuery: string) => {
      if (!pagefind || !searchQuery.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const trimmed = searchQuery.trim();
        const hasMultipleWords = trimmed.includes(" ");
        // For multi-word queries, try phrase search first (quoted), fall back to regular
        let response: PagefindResponse;
        if (hasMultipleWords) {
          response = await pagefind.search(`"${trimmed}"`);
          if (response.results.length === 0) {
            response = await pagefind.search(trimmed);
          }
        } else {
          response = await pagefind.search(trimmed);
        }
        const resolved = await Promise.all(
          response.results.slice(0, 8).map((r) => r.data()),
        );
        setResults(resolved);
      } catch {
        setResults([]);
      }
      setLoading(false);
    },
    [pagefind],
  );

  // Debounced search
  useEffect(() => {
    clearTimeout(debounceRef.current);
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(() => doSearch(query), 200);
    return () => clearTimeout(debounceRef.current);
  }, [query, doSearch]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Desktop trigger */}
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="rounded-md p-2 text-gray-darker transition-colors hover:bg-accent-lightest-2 hover:text-primary"
          aria-label="Search"
        >
          <Search className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-[10%] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-xl border border-gray bg-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-gray px-4 py-3">
            <Search className="size-5 shrink-0 text-gray-darker" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search articles, research, stories, and more..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-base text-primary-dark outline-none placeholder:text-gray-dark"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded p-1 text-gray-darker hover:text-primary-dark"
              >
                <X className="size-4" />
              </button>
            )}
            <kbd className="hidden rounded border border-gray px-1.5 py-0.5 text-xs text-gray-darker sm:inline-block">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {loading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="size-5 animate-spin text-gray-darker" />
              </div>
            )}

            {!loading && query && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-gray-darker">
                No results found for &ldquo;{query}&rdquo;
              </div>
            )}

            {!loading && results.length > 0 && (
              <ul className="p-2">
                {results.map((result) => {
                  const type = getContentType(result.url);
                  return (
                    <li key={result.url}>
                      <a
                        href={result.url}
                        className="flex flex-col gap-1.5 rounded-lg px-3 py-3 transition-colors hover:bg-accent-lightest-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-primary-dark">
                            {result.meta?.title || result.url}
                          </span>
                          <ContentTypeBadge type={type} />
                        </div>
                        {result.excerpt && (
                          <p
                            className="line-clamp-2 text-xs leading-relaxed text-gray-darker [&_mark]:bg-accent-light [&_mark]:text-primary-dark"
                            dangerouslySetInnerHTML={{ __html: result.excerpt }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            {!loading && !query && (
              <div className="px-4 py-8 text-center text-sm text-gray-darker">
                Start typing to search...
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray px-4 py-2 text-xs text-gray-darker">
            <span>
              <kbd className="rounded border border-gray px-1 py-0.5">
                &#8593;
              </kbd>{" "}
              <kbd className="rounded border border-gray px-1 py-0.5">
                &#8595;
              </kbd>{" "}
              to navigate
            </span>
            <span>
              <kbd className="rounded border border-gray px-1 py-0.5">
                &#8984;K
              </kbd>{" "}
              to toggle
            </span>
          </div>

          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search articles, research, stories, and pages on the Green Software Foundation
            website.
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
