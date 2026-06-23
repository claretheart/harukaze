# templates/ — 再利用する雛形

ゼロから作らないための「出発点」。新規制作はここをコピーして始めます。

## 入れるもの（例）
- `case-page/` … 事例ページの雛形（Hero / 想い / 商品 / ギャラリー / 店舗情報 / CTA）
- `note-article/` … note記事の雛形
- `sns-post/` … SNS投稿の雛形

## 使い方
`templates/<name>/` を `projects/` 配下にコピー → 中身を差し替える。

## ルール
雛形は「型」だけ。具体的な内容や実データは入れない（それは projects/ へ）。

> ヒント: 既存の `projects/website/cafe-haruakari/` や `hanamusubi/` が事例ページの良い参考になります。汎用化したくなったらここに雛形として切り出しましょう。
