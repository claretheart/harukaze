# skills/ — 作業の手順・スクリプト

同じ作業を2回やったら、ここに仕組み化します。**再現性**のための場所。

## 中身
- `image-generation/` … AI画像生成（gpt-image-1）スクリプトと手順

## よく使う手順メモ
- 画像生成: `node skills/image-generation/gen-image.mjs "プロンプト" --out resources/photos/foo.png`
- 画像軽量化（macOS）: `sips -Z 1600 -s format jpeg -s formatOptions 80 in.png --out out.jpg`
- デプロイ: `cd projects/website && npx vercel --prod --yes --scope kohakunos-projects`
- QR生成: `npx qrcode -o out.png -d "#4A403A" -l "#FAF7F2" "URL"`

## 1スキル1フォルダ
各フォルダに `README.md`（手順）と、必要なら実行スクリプトを置く。
