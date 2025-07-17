# NEWh Business Team Assessment

新事業チーム診断サービスのランディングページ

## 🎯 プロジェクト概要

企業の新事業開発チームの能力を客観的に診断し、具体的なアクションプランを提案するサービスのLP（ランディングページ）です。

## ✨ 主な機能

- **洗練されたデザイン**: Manyoneスタイルを参考にした高級感のあるUI
- **レスポンシブ対応**: モバイル・タブレット・デスクトップで最適表示
- **アニメーション効果**: スムーズなフェードイン・ホバーエフェクト
- **Google Forms連携**: 診断フォームへの直接リンク
- **3ステップ診断プロセス**: 分かりやすいサービス説明

## 🎨 デザイン特徴

- **カラーパレット**: Indigo-800ベースの落ち着いたプロフェッショナルカラー
- **タイポグラフィ**: Inter フォントによる読みやすい文字組み
- **視覚階層**: 明確な情報構造と適切な余白設計

## 🛠 技術スタック

- **Next.js 15.4.1** - React フレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS
- **ESLint** - コード品質管理

## 📁 プロジェクト構成

```
├── src/
│   └── app/
│       ├── page.tsx                    # メインページ
│       ├── page-violet.tsx            # Indigo-800カラー版
│       ├── page-video.tsx             # 動画ヒーロー版
│       └── page-manyone-colors.tsx    # Manyoneスタイル版
├── public/
│   ├── logo.png                       # NEWhロゴ
│   ├── analysis1.png                  # 診断結果サンプル1
│   ├── analysis2.png                  # 診断結果サンプル2
│   ├── analysis3.png                  # 診断結果サンプル3
│   └── *.svg                          # アイコン類
├── demo-final.html                    # 最終デモ版（カスタマイズ済み）
├── final-clean.html                   # クリーン版HTML
└── index-*.html                       # 各種バリエーション
```

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

### 3. 本番ビルド

```bash
npm run build
```

## 📱 デモ版

即座に確認できるHTMLファイル:

- **demo-final.html**: 最終カスタマイズ版（ロゴ・画像含む）
- **final-clean.html**: シンプルなクリーン版

ブラウザで直接開いて確認できます。

## 🌐 デプロイ

### Vercel (推奨)

```bash
npx vercel
```

### Netlify

1. GitHubリポジトリをNetlifyに接続
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / root

## 📋 診断サービス

### 対象
- 新事業開発に取り組む企業チーム
- 能力評価・アクションプラン策定を求める組織

### プロセス
1. **7分診断**: 簡単な質問に回答
2. **レポート提供**: 専用分析結果をメール送信
3. **研修提案**: 具体的なアクションプラン提示

### 提供価値
- 現状把握の客観化
- 戦略的アクションプラン
- 外部支援の検討材料

## 🔗 リンク

- [診断フォーム](https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform)
- [NEWh公式サイト](https://newh.co.jp)

## 📄 ライセンス

このプロジェクトは株式会社NEWhの所有物です。

---

Created with ❤️ using Claude Code