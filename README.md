# harukaze OS

「**京都の小さなお店のデジタルパートナー**」として、harukaze ブランドを育てるための開発環境（ワークスペース）です。

> 京都に春風を。
> 小さな挑戦に、そっと寄り添うデジタルの右腕。

---

## これは何か / 何ではないか

- ✅ 地域を応援するための「**事例**」を積み上げていく活動の基盤
- ✅ ブランド・素材・手順・プロンプトを一元管理し、**再現性**を高める場所
- ❌ 受託制作会社の案件管理システム**ではありません**

迷ったときは「制作会社」ではなく「**京都の案内人**」を優先します。

---

## フォルダ構成と役割

```
harukaze-os/
├─ README.md      ← このファイル（全体の地図）
├─ brand/         ブランドの核（理念・デザイン・ロゴ）
│   ├─ BRAND.md  DESIGN_SYSTEM.md
│   ├─ docs/      personas / services / vision
│   └─ logo/
├─ projects/      個別プロジェクト（1プロジェクト1フォルダ）
│   ├─ website/   公開サイト本体（Git/Vercel連携）
│   └─ meishi/    名刺
├─ templates/     再利用する雛形（ページ・文書・投稿）
├─ skills/        作業の手順・スクリプト（自動化）
│   └─ image-generation/   AI画像生成（gpt-image-1）
├─ resources/     共有素材
│   ├─ photos/  illustrations/  icons/
├─ prompts/       AIプロンプト集（image / writing / research）
└─ archive/       役目を終えたもの（旧版・ボツ・過去事例）
```

| フォルダ | 役割 | 入れるもの |
|---------|------|-----------|
| **brand/** | ブランドの判断基準。全プロジェクトが参照する「憲法」 | BRAND.md、DESIGN_SYSTEM.md、docs、ロゴ |
| **projects/** | 実際に作る・公開するもの。1プロジェクト＝1フォルダ | 公開サイト、各事例、名刺、ツール |
| **templates/** | ゼロから作らないための出発点 | 事例ページ雛形、note記事雛形、SNS投稿雛形 |
| **skills/** | 同じ作業を2回やったら仕組み化 | 画像生成・軽量化・デプロイ等の手順とスクリプト |
| **resources/** | 使い回す素材の置き場 | 写真・イラスト・アイコン・フォント・参考 |
| **prompts/** | 効いたプロンプトを資産化 | 画像生成・文章・リサーチ用プロンプト |
| **archive/** | 捨てずに寝かせる | 旧バージョン、不採用案、終了した事例 |

---

## 運用ルール（拡張しやすくするために）

1. **1プロジェクト1フォルダ** — `projects/` の中に独立フォルダで持つ
2. **各フォルダに README** — 中身を1行で説明（自己説明的に保つ）
3. **命名規則** — `kebab-case`、日付は `YYYY-MM-DD`
4. **判断に迷ったら brand/** — トーン・色・言葉づかいの基準
5. **置き場所の原則** — 完成物→projects / 型→templates / 手順→skills / 素材→resources / プロンプト→prompts / 終了→archive

---

## よく使うコマンド

```bash
# 画像生成（gpt-image-1）
node skills/image-generation/gen-image.mjs "プロンプト" --out resources/photos/foo.png

# サイトのデプロイ
cd projects/website && npx vercel --prod --yes --scope kohakunos-projects
```

---

## クイックリンク

- 公開サイト: https://harukaze-eta.vercel.app
- GitHub: https://github.com/claretheart/harukaze
- LINE相談: https://lin.ee/qyhQEqS

---

*体系化（harukaze-os化）: 2026-06-23 完了 ／ 旧 `~/projects/harukaze/` から移行済み*
