import { useState, type FormEvent } from "react";

interface Props {
  /** Variant: "inline" for article/page embeds, "compact" for footer */
  variant?: "inline" | "compact";
  /** Heading text (only shown for inline variant) */
  heading?: string;
  /** Body text (only shown for inline variant) */
  body?: string;
  /** Placeholder for email input */
  emailPlaceholder?: string;
  /** Whether to show a FNAME field */
  showName?: boolean;
  /** Placeholder for name input */
  namePlaceholder?: string;
  /** Button text */
  buttonText?: string;
}

// Mailchimp JSONP endpoint (post-json instead of post)
const MAILCHIMP_URL =
  "https://foundation.us5.list-manage.com/subscribe/post-json?u=ddc99c7db248c3df0ef4f7d24&id=c5376a805c&f_id=003e64e9f0";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm({
  variant = "inline",
  heading,
  body,
  emailPlaceholder = "Your email address",
  showName = false,
  namePlaceholder = "Your name",
  buttonText = "Subscribe",
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Build JSONP URL
    const params = new URLSearchParams();
    params.set("EMAIL", email);
    if (showName && name) params.set("FNAME", name);
    // Mailchimp bot field
    params.set("b_ddc99c7db248c3df0ef4f7d24_c5376a805c", "");

    const url = `${MAILCHIMP_URL}&${params.toString()}`;

    try {
      // Use JSONP since Mailchimp doesn't support CORS on this endpoint
      const data = await jsonp(url);
      if (data.result === "success") {
        setStatus("success");
        setMessage(data.msg || "Thanks for subscribing!");
        // Track in GA4
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "newsletter_submission", {
            form_variant: variant,
          });
        }
      } else {
        setStatus("error");
        // Strip HTML tags from Mailchimp error messages
        setMessage(
          (data.msg || "Something went wrong. Please try again.").replace(
            /<[^>]*>/g,
            "",
          ),
        );
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    if (variant === "compact") {
      return <p className="text-sm text-accent font-medium">{message}</p>;
    }
    return (
      <div className="bg-accent-lighter rounded-xl p-8 md:p-10 text-center">
        <p className="text-primary font-bold text-lg">{message}</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={emailPlaceholder}
          className="flex-1 min-w-0 px-3 py-1.5 rounded text-xs bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-accent"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-3 py-1.5 bg-accent text-primary-darker font-bold rounded text-xs hover:bg-accent-light transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {status === "submitting" ? "..." : buttonText}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-xs mt-1 col-span-full">{message}</p>
        )}
      </form>
    );
  }

  // Inline variant
  return (
    <div>
      {heading && (
        <h3 className="text-xl font-extrabold text-[var(--primary)] mb-2">
          {heading}
        </h3>
      )}
      {body && (
        <p className="text-sm text-[var(--primary-dark)] mb-5">{body}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={namePlaceholder}
            className="px-4 py-2.5 rounded-lg text-[var(--primary-dark)] bg-white border border-[var(--primary-lighter)] placeholder:text-[var(--gray-darker)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
          />
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={emailPlaceholder}
            className="flex-1 px-4 py-2.5 rounded-lg text-[var(--primary-dark)] bg-white border border-[var(--primary-lighter)] placeholder:text-[var(--gray-darker)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-5 py-2.5 bg-[var(--primary)] text-white font-bold rounded-lg hover:bg-[var(--primary-dark)] transition-colors whitespace-nowrap text-sm disabled:opacity-50"
          >
            {status === "submitting" ? "Subscribing..." : buttonText}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-600 text-sm">{message}</p>
        )}
      </form>
    </div>
  );
}

/** Simple JSONP helper for Mailchimp */
function jsonp(url: string): Promise<{ result: string; msg: string }> {
  return new Promise((resolve, reject) => {
    const callbackName = `mc_callback_${Date.now()}`;
    const script = document.createElement("script");

    (window as any)[callbackName] = (data: any) => {
      delete (window as any)[callbackName];
      script.remove();
      resolve(data);
    };

    script.src = `${url}&c=${callbackName}`;
    script.onerror = () => {
      delete (window as any)[callbackName];
      script.remove();
      reject(new Error("JSONP request failed"));
    };

    document.body.appendChild(script);
  });
}
