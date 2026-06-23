# image-generation — AI画像生成（gpt-image-1）

プロンプトから画像を生成して保存するスクリプト。

## 準備
リポジトリ直下の `.env` に `OPENAI_API_KEY=sk-...` を記載（git管理外）。

## 使い方（harukaze-os/ 直下で実行）
```bash
node skills/image-generation/gen-image.mjs "プロンプト" [--out 出力パス] [--size サイズ] [--quality 品質]
```

- `--out` 既定: `resources/photos/gen-<日時>.png`
- `--size` 1024x1024 / 1536x1024(横長) / 1024x1536(縦長) / auto（既定 1536x1024）
- `--quality` low / medium / high / auto（既定 high）

## 例
```bash
node skills/image-generation/gen-image.mjs "京都の町家カフェの店内、自然光、実写、人物なし、文字なし" \
  --out resources/photos/cafe-interior.png --size 1536x1024 --quality medium
```

## 料金の目安
従量課金（1枚 数円〜40円程度）。下書きは medium、仕上げは high。
