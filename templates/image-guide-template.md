# 画像ガイド テンプレート（写真・イラスト生成）

> **使い方**：〔業種〕を埋めて、各カットのプロンプトを生成 → `skills/image-generation/gen-image.mjs` で作成。
> ブランド基準は `README.md`。**人物の顔がはっきり写る／実在店舗が特定できる**画像は避ける（架空のため）。

---

## 変数

| 変数 | 例 |
|------|----|
| 業種 | 〔業種〕（例：花屋） |
| 店名 | 〔店名〕 |
| コンセプト | 〔コンセプト〕 |
| slug | 〔slug〕 |
| テイスト | 実写風 / 水彩イラスト |

---

## 撮りたいカット（6〜8枚）

| # | 内容 | ファイル名（例） |
|---|------|----------------|
| 1 | 外観（暖簾・格子戸・看板） | exterior.jpg |
| 2 | 店内のひき | interior.jpg |
| 3 | カウンター / 作業台 | counter.jpg |
| 4 | 制作風景（〔業種〕らしい手仕事） | making.jpg |
| 5 | 主力商品のアップ | product.jpg |
| 6 | 季節の演出 | seasonal.jpg |
| 7 | オーナー（後ろ姿/手元など顔を強調しない） | owner.jpg |
| 8 | エリアの風景（京都の路地・川など） | town.jpg |

---

## プロンプトのひな型（実写風）

```
京都の〔業種〕「〔店名〕」の〔カット内容〕。〔コンセプト〕が伝わる雰囲気。
町家・和モダン・自然光・木の質感・落ち着いた色。実写写真、リアル、温かい。
人物の顔は強調しない。文字なし、ロゴなし。
```

## プロンプトのひな型（水彩イラスト）

```
〔カット内容〕の水彩イラスト。クリーム背景、淡いピンクと若草色のにじみ、
やさしく上品、手描きタッチ。和モダン。文字なし、人物なし。
```

---

## 生成コマンド

```bash
node skills/image-generation/gen-image.mjs "上のプロンプト" \
  --out resources/photos/〔slug〕/exterior.png --size 1536x1024 --quality medium
```

- 下書きは `medium`、仕上げは `high`
- 正方形の商品アップは `--size 1024x1024`

## Web用に軽量化（macOS）

```bash
sips -Z 1000 -s format jpeg -s formatOptions 80 \
  resources/photos/〔slug〕/exterior.png \
  --out projects/website/assets/images/〔slug〕/exterior.jpg
```

- 原本 → `resources/photos/〔slug〕/`、軽量版 → `projects/website/assets/images/〔slug〕/`
- 目安：横長 `-Z 1000〜1600`、正方形 `-Z 900`、オーナー `-Z 600`

## 禁止

蛍光色・強いコントラスト・派手な加工。あくまで自然光・ナチュラル。
