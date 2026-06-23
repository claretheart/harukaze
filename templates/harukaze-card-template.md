# 名刺 テンプレート

> **使い方**：変数を埋めて名刺を作る。実装の元データは `projects/meishi/card.html`（コピーして差し替える）。
> harukaze 本体の名刺にも、提案事例の店舗用名刺にも使える。サイズは日本標準 **91×55mm**。

---

## 変数

| 変数 | 例 | 記入欄 |
|------|----|-------|
| 名前 | 高岸 祐太 | 〔名前〕 |
| 肩書き | 地域のデジタル伴走者 | 〔肩書き〕 |
| ブランド/店名 | harukaze | 〔ブランド〕 |
| キャッチ | 京都に春風を。 | 〔キャッチ〕 |
| タグライン | 小さな挑戦に、そっと寄り添うデジタルの右腕。 | 〔タグ〕 |
| Web | harukaze-eta.vercel.app | 〔URL〕 |
| LINE | QRから友だち追加 | 〔LINE〕 |
| Mail | kohakuno1122@gmail.com | 〔メール〕 |
| QR先 | サイト or LINE | 〔QR先〕 |

---

## 構成

### 表
- 左上：文字ロゴ「〔ブランド〕」＋桜色の細いライン
- 中央：〔キャッチ〕（"風"を桜色に）／小さく〔タグ〕
- 下：〔名前〕／〔肩書き〕／Web・LINE・Mail
- 右下：QR（〔QR先〕）＋ラベル

### 裏
- 〔キャッチ〕を大きく中央に／下にブランド名・サービス一覧（任意）

---

## デザイン指針

- 背景：水彩イラスト（`resources/illustrations/card-bg.png`）。桜の枝＋クリーム地、文字を置く余白を確保
- フォント：見出し Shippori Mincho ／ 文字ロゴ・本文 Zen Maru Gothic
- カラー：背景 `#FAF7F2` ／ 桜 `#E7C9C9` ／ 若草 `#B8C9A3` ／ 茶 `#4A403A`
- **顔写真は使わない方針**（文字ロゴで上品に）。必要なら別途検討

## 禁止

ネオンカラー・強いコントラスト・ギラギラ・営業感。静かで上品に。

## 制作手順

1. QR生成：`npx qrcode -o resources/icons/qr-〔slug〕.png -d "#4A403A" -l "#FAF7F2" "〔URL or lin.ee〕"`
2. 背景が無ければ `gen-image.mjs` で水彩背景を生成（`templates/image-guide-template.md` 参照）
3. `projects/meishi/card.html` をコピーし、変数を差し替え
4. ブラウザで開き ⌘P → PDF（用紙 91×55mm・余白なし）→ 印刷発注
