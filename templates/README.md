# templates/ — 再利用する雛形

ゼロから作らないための「出発点」。**業種を入れて `〔 〕` を埋めるだけ**で使い回せます。

## テンプレート一覧

| ファイル | 用途 |
|---------|------|
| `brand-site-template.md` | 業種別ブランドサイト（提案事例）の設計 |
| `image-guide-template.md` | 写真・イラストの生成ガイド（カット一覧＋プロンプト） |
| `pr-video-template.md` | 30秒PR動画の台本・絵コンテ |
| `sns-post-template.md` | SNS投稿（体験／Tips／問いかけ／お知らせ） |
| `harukaze-card-template.md` | 名刺（91×55mm） |

## 使い方

1. テンプレをコピー（または見ながら）
2. 冒頭の **「変数」** の `〔 〕` を業種・店名などで埋める
3. その内容を元に `projects/〔slug〕/` に実装、または素材を生成

## ルール

- 雛形は「型」だけ。具体データは入れない（それは `projects/` へ）
- すべて ルート `README.md`・`brand/` のブランド基準・禁止事項に従う
- 迷ったら「**静かで、やさしいか？**」

> 参考になる完成形：`projects/website/cafe-haruakari/`（カフェ）・`hanamusubi/`（花屋）
