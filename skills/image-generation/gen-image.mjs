#!/usr/bin/env node
/**
 * harukaze 画像生成スクリプト（OpenAI gpt-image-1）
 *
 * 使い方（リポジトリ直下 harukaze-os/ で実行）:
 *   node skills/image-generation/gen-image.mjs "プロンプト" [--out 出力パス] [--size サイズ] [--quality 品質]
 *
 * 例:
 *   node skills/image-generation/gen-image.mjs "水彩風の京都町家カフェの外観、和モダン、柔らかい光"
 *   node skills/image-generation/gen-image.mjs "桜の水彩イラスト" --out resources/illustrations/sakura.png --size 1024x1024
 *
 * オプション:
 *   --out      出力ファイルパス（既定: resources/photos/gen-<日時>.png）
 *   --size     1024x1024 / 1536x1024(横長) / 1024x1536(縦長) / auto（既定: 1536x1024）
 *   --quality  low / medium / high / auto（既定: high）
 *
 * 必要なもの:
 *   .env に OPENAI_API_KEY=sk-... を記載（git には上げない）
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");  // skills/image-generation/ から見たリポジトリ直下

// --- .env を簡易ロード（依存なし） ---
function loadEnv() {
  const envPath = join(ROOT, ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}
loadEnv();

// --- 引数パース ---
const args = process.argv.slice(2);
const prompt = args.find((a) => !a.startsWith("--"));
function flag(name, def) {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : def;
}

if (!prompt) {
  console.error('使い方: node scripts/gen-image.mjs "プロンプト" [--out パス] [--size サイズ] [--quality 品質]');
  process.exit(1);
}

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("エラー: OPENAI_API_KEY が見つかりません。harukaze/.env に OPENAI_API_KEY=sk-... を記載してください。");
  process.exit(1);
}

const size = flag("size", "1536x1024");
const quality = flag("quality", "high");
const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const outRel = flag("out", `resources/photos/gen-${ts}.png`);
const outPath = resolve(ROOT, outRel);

console.log(`🎨 生成中… (size=${size}, quality=${quality})`);
console.log(`   prompt: ${prompt}`);

const res = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: "gpt-image-1",
    prompt,
    size,
    quality,
    n: 1,
  }),
});

if (!res.ok) {
  const text = await res.text();
  console.error(`エラー (HTTP ${res.status}):\n${text}`);
  process.exit(1);
}

const json = await res.json();
const b64 = json?.data?.[0]?.b64_json;
if (!b64) {
  console.error("エラー: 画像データが返りませんでした。\n" + JSON.stringify(json, null, 2));
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, Buffer.from(b64, "base64"));
console.log(`✅ 保存しました: ${outRel}`);
