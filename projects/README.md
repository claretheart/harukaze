# projects/ — 個別プロジェクト

実際に作る・公開するもの。**1プロジェクト＝1フォルダ**。

## 現在のプロジェクト
- `website/` … harukaze 公開サイト本体（Git/Vercel連携）。中に事例ページ `cafe-haruakari/`（珈琲 春灯）、`hanamusubi/`（花結び）を含む。`PROJECT.md` あり。
- `meishi/` … 名刺（`card.html`、印刷/PDF用）

## デプロイ
```bash
cd projects/website && npx vercel --prod --yes --scope kohakunos-projects
```

## 新規プロジェクトの作り方
1. `projects/<kebab-case-name>/` を作る
2. `README.md` に目的・状態・URL を書く
3. ブランドは `../../brand/`、素材は `../../resources/` を参照

## ステータス表記
`設計中 / 制作中 / 公開済み / 改善中 / 終了`
