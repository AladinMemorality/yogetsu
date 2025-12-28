#!/usr/bin/env npx tsx

/**
 * Image Optimization Script
 *
 * Converts JPG, JPEG, and PNG images to WebP format for better compression.
 * Skips AVIF files (already optimal) and the partners directory (SVGs with wrong extension).
 *
 * Usage:
 *   npx tsx scripts/optimize-images.ts              # Run optimization
 *   npx tsx scripts/optimize-images.ts --dry-run    # Preview without changes
 *   npx tsx scripts/optimize-images.ts --quality=90 # Custom quality (default: 85)
 */

import sharp from "sharp";
import * as fs from "fs";
import * as path from "path";

// Configuration
const CONFIG = {
  publicDir: path.join(process.cwd(), "public", "images"),
  quality: 85,
  dryRun: false,
  verbose: false,
  skipPatterns: [/\.avif$/i, /partners\//],
  supportedFormats: [".jpg", ".jpeg", ".png"],
  codeSearchDirs: ["app", "lib"],
  codeExtensions: [".ts", ".tsx"],
};

// Parse CLI arguments
const args = process.argv.slice(2);
for (const arg of args) {
  if (arg === "--dry-run") CONFIG.dryRun = true;
  if (arg === "--verbose") CONFIG.verbose = true;
  if (arg.startsWith("--quality=")) {
    CONFIG.quality = parseInt(arg.split("=")[1], 10);
  }
}

interface ImageFile {
  absolutePath: string;
  relativePath: string;
  publicPath: string;
  ext: string;
  size: number;
}

interface OptimizationResult {
  file: ImageFile;
  newPath: string;
  newPublicPath: string;
  originalSize: number;
  newSize: number;
  savings: number;
  savingsPercent: number;
}

interface SkippedFile {
  relativePath: string;
  reason: string;
  size: number;
}

interface CodeUpdate {
  file: string;
  oldPath: string;
  newPath: string;
}

// Helper to format bytes
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

// Check if file should be skipped
function shouldSkip(
  relativePath: string
): { skip: boolean; reason?: string } {
  for (const pattern of CONFIG.skipPatterns) {
    if (pattern.test(relativePath)) {
      if (pattern.source.includes("avif")) {
        return { skip: true, reason: "AVIF (already optimal)" };
      }
      if (pattern.source.includes("partners")) {
        return { skip: true, reason: "Partners directory (SVGs)" };
      }
      return { skip: true, reason: "Matches skip pattern" };
    }
  }
  return { skip: false };
}

// Recursively find all images
async function discoverImages(dir: string): Promise<ImageFile[]> {
  const images: ImageFile[] = [];

  async function scan(currentDir: string): Promise<void> {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const absolutePath = path.join(currentDir, entry.name);
      const relativePath = path.relative(CONFIG.publicDir, absolutePath);
      const publicPath = `/images/${relativePath}`;

      if (entry.isDirectory()) {
        await scan(absolutePath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (CONFIG.supportedFormats.includes(ext) || ext === ".avif") {
          const stats = fs.statSync(absolutePath);
          images.push({
            absolutePath,
            relativePath,
            publicPath,
            ext,
            size: stats.size,
          });
        }
      }
    }
  }

  await scan(dir);
  return images;
}

// Optimize a single image
async function optimizeImage(file: ImageFile): Promise<OptimizationResult> {
  const newFileName = file.relativePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const newAbsolutePath = path.join(CONFIG.publicDir, newFileName);
  const newPublicPath = `/images/${newFileName}`;

  if (!CONFIG.dryRun) {
    // Convert to WebP
    await sharp(file.absolutePath)
      .webp({ quality: CONFIG.quality })
      .toFile(newAbsolutePath);

    // Delete original
    fs.unlinkSync(file.absolutePath);
  }

  const newSize = CONFIG.dryRun
    ? Math.round(file.size * 0.4) // Estimate 60% reduction
    : fs.statSync(newAbsolutePath).size;

  const savings = file.size - newSize;
  const savingsPercent = Math.round((savings / file.size) * 100);

  return {
    file,
    newPath: newAbsolutePath,
    newPublicPath,
    originalSize: file.size,
    newSize,
    savings,
    savingsPercent,
  };
}

// Find and update code references
async function updateCodeReferences(
  results: OptimizationResult[]
): Promise<CodeUpdate[]> {
  const updates: CodeUpdate[] = [];

  // Build replacement map
  const replacements: Map<string, string> = new Map();
  for (const result of results) {
    replacements.set(result.file.publicPath, result.newPublicPath);
  }

  // Scan code files
  for (const searchDir of CONFIG.codeSearchDirs) {
    const dirPath = path.join(process.cwd(), searchDir);
    if (!fs.existsSync(dirPath)) continue;

    await scanCodeDir(dirPath, replacements, updates);
  }

  return updates;
}

async function scanCodeDir(
  dir: string,
  replacements: Map<string, string>,
  updates: CodeUpdate[]
): Promise<void> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await scanCodeDir(entryPath, replacements, updates);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONFIG.codeExtensions.includes(ext)) {
        await updateFile(entryPath, replacements, updates);
      }
    }
  }
}

async function updateFile(
  filePath: string,
  replacements: Map<string, string>,
  updates: CodeUpdate[]
): Promise<void> {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;
  const relativeFilePath = path.relative(process.cwd(), filePath);

  for (const [oldPath, newPath] of replacements) {
    if (content.includes(oldPath)) {
      if (!CONFIG.dryRun) {
        content = content.split(oldPath).join(newPath);
      }
      modified = true;
      updates.push({
        file: relativeFilePath,
        oldPath,
        newPath,
      });
    }
  }

  if (modified && !CONFIG.dryRun) {
    fs.writeFileSync(filePath, content, "utf-8");
  }
}

// Main execution
async function main(): Promise<void> {
  console.log("\n📸 Image Optimization Script");
  console.log("═".repeat(50));

  if (CONFIG.dryRun) {
    console.log("🔍 DRY RUN MODE - No changes will be made\n");
  }

  console.log(`Quality: ${CONFIG.quality}`);
  console.log(`Source: ${CONFIG.publicDir}\n`);

  // Check if directory exists
  if (!fs.existsSync(CONFIG.publicDir)) {
    console.error(`❌ Directory not found: ${CONFIG.publicDir}`);
    process.exit(1);
  }

  // Discover images
  console.log("Scanning for images...\n");
  const allImages = await discoverImages(CONFIG.publicDir);

  const skipped: SkippedFile[] = [];
  const toOptimize: ImageFile[] = [];

  for (const image of allImages) {
    const skipCheck = shouldSkip(image.relativePath);
    if (skipCheck.skip) {
      skipped.push({
        relativePath: image.relativePath,
        reason: skipCheck.reason || "Unknown",
        size: image.size,
      });
    } else if (CONFIG.supportedFormats.includes(image.ext)) {
      toOptimize.push(image);
    }
  }

  // Show skipped files
  if (skipped.length > 0) {
    console.log("SKIPPED FILES:");
    console.log("─".repeat(50));
    for (const file of skipped) {
      console.log(`  ⏭️  ${file.relativePath}`);
      console.log(`      Reason: ${file.reason} (${formatBytes(file.size)})`);
    }
    console.log();
  }

  if (toOptimize.length === 0) {
    console.log("✅ No images to optimize.\n");
    return;
  }

  // Optimize images
  console.log("OPTIMIZING:");
  console.log("─".repeat(50));

  const results: OptimizationResult[] = [];
  let totalOriginal = 0;
  let totalNew = 0;

  for (const image of toOptimize) {
    try {
      const result = await optimizeImage(image);
      results.push(result);
      totalOriginal += result.originalSize;
      totalNew += result.newSize;

      const arrow = CONFIG.dryRun ? "→" : "✓";
      console.log(
        `  ${arrow} ${image.relativePath} → ${path.basename(result.newPublicPath)}`
      );
      console.log(
        `      ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (${result.savingsPercent}% saved)`
      );
    } catch (error) {
      console.error(`  ❌ ${image.relativePath}: ${error}`);
    }
  }

  console.log();

  // Update code references
  console.log("CODE REFERENCE UPDATES:");
  console.log("─".repeat(50));

  const codeUpdates = await updateCodeReferences(results);

  if (codeUpdates.length === 0) {
    console.log("  No code references found to update.\n");
  } else {
    // Group by file
    const byFile: Map<string, CodeUpdate[]> = new Map();
    for (const update of codeUpdates) {
      const existing = byFile.get(update.file) || [];
      existing.push(update);
      byFile.set(update.file, existing);
    }

    for (const [file, updates] of byFile) {
      console.log(`  📝 ${file}: ${updates.length} update(s)`);
      if (CONFIG.verbose) {
        for (const u of updates) {
          console.log(`      ${u.oldPath} → ${u.newPath}`);
        }
      }
    }
    console.log();
  }

  // Summary
  const totalSavings = totalOriginal - totalNew;
  const totalPercent = Math.round((totalSavings / totalOriginal) * 100);

  console.log("SUMMARY");
  console.log("═".repeat(50));
  console.log(`  Files optimized: ${results.length}`);
  console.log(`  Files skipped:   ${skipped.length}`);
  console.log(`  Original total:  ${formatBytes(totalOriginal)}`);
  console.log(`  Optimized total: ${formatBytes(totalNew)}`);
  console.log(`  Total savings:   ${formatBytes(totalSavings)} (${totalPercent}%)`);
  console.log(`  Code updates:    ${codeUpdates.length}`);

  if (CONFIG.dryRun) {
    console.log("\n🔍 This was a dry run. Run without --dry-run to apply changes.");
  } else {
    console.log("\n✅ Optimization complete!");
  }
  console.log();
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
