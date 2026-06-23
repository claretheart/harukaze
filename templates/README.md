# templates/ — 再利用する雛形

ゼロから作らないための「出発点」。**業種を入れて `〔 〕` を埋めるだけ**で使い回せます。

## harukaze 事例パック（6点セット）

業種ごとに、この6つをワンセットで用意する。

| # | テンプレート | 内容 |
|---|-------------|------|
| ① | `brand-site-template.md` | ブランドサイト |
| ② | `image-guide-template.md` | CodeX画像生成ガイド |
| ③ | `pr-video-template.md` | PR動画 |
| ④ | `sns-post-template.md` | SNS投稿 |
| ⑤ | `harukaze-karte.md` | 春風カルテ（問診シート） |
| ⑥ | `micro-app.md` | Micro App提案（必須でない・課題がある時のみ） |

## その他のテンプレート
- `harukaze-card-template.md` … 名刺（パック外・harukaze本体や店舗用）

## 使い方
1. 冒頭の「変数」の `〔 〕` を業種・店名などで埋める
2. ⑤春風カルテでお店を知る → ①〜④を制作 → 課題があれば⑥
3. `projects/website/<slug>/` に実装

## ルール
- 雛形は「型」だけ。具体データは `projects/` へ
- すべて ルート `README.md`・`brand/` の基準・禁止事項に従う
- 迷ったら「**静かで、やさしいか？**」

> 参考完成形：`projects/website/cafe-haruakari/`（カフェ）・`hanamusubi/`（花屋）
