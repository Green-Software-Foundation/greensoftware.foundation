#!/usr/bin/env node
/**
 * Optimise all SVGs in public/assets using SVGO.
 * Runs automatically before every build so newly-added SVGs are always compressed.
 */
import { optimize, loadConfig } from "svgo";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { globSync } from "node:fs";

// Use Node 22 globSync from fs module, fallback to manual walk
let svgFiles;
try {
  // Node 22+
  const { globSync: fsGlob } = await import("node:fs");
  svgFiles = fsGlob("public/assets/**/*.svg");
} catch {
  // Fallback: use a simple recursive find
  const { execSync } = await import("node:child_process");
  svgFiles = execSync('find public/assets -name "*.svg" -type f')
    .toString()
    .trim()
    .split("\n")
    .filter(Boolean);
}

let totalBefore = 0;
let totalAfter = 0;
let optimised = 0;

for (const file of svgFiles) {
  const input = readFileSync(file, "utf8");
  const result = optimize(input, {
    path: file,
    multipass: true,
  });

  totalBefore += Buffer.byteLength(input, "utf8");
  totalAfter += Buffer.byteLength(result.data, "utf8");

  if (result.data !== input) {
    writeFileSync(file, result.data);
    optimised++;
  }
}

const savedKB = ((totalBefore - totalAfter) / 1024).toFixed(1);
console.log(
  `✓ SVG optimisation: ${svgFiles.length} files scanned, ${optimised} optimised, ${savedKB} KB saved`
);
