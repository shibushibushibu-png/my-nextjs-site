# GitHub リポジトリセットアップ手順

## 1. GitHubでリポジトリ作成後に実行するコマンド

推奨リポジトリ名: `newh-business-team-assessment` または `newh-team-capability-diagnosis`

```bash
# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/newh-business-team-assessment.git

# mainブランチにpush
git push -u origin main
```

## 2. プロジェクト構成

```
my-nextjs-site/
├── src/
│   └── app/
│       ├── page.tsx (元のNext.jsページ)
│       ├── page-violet.tsx (Indigo-800カラー版)
│       ├── page-video.tsx (動画ヒーロー版)
│       └── page-manyone-colors.tsx (Manyoneスタイル版)
├── public/
│   ├── logo.png
│   ├── analysis1.png
│   ├── analysis2.png
│   ├── analysis3.png
│   └── *.svg (アイコン類)
├── demo-final.html (最終デモ版・カスタマイズ済み)
├── final-clean.html (クリーン版)
└── package.json
```

## 3. 主な機能

- ✅ Manyoneスタイルの洗練されたデザイン
- ✅ Indigo-800カラーパレット
- ✅ レスポンシブデザイン
- ✅ Google Forms連携
- ✅ アニメーション効果
- ✅ TypeScript対応
- ✅ Tailwind CSS

## 4. デプロイオプション

### Vercel (推奨)
```bash
npx vercel
```

### Netlify
1. GitHubリポジトリをNetlifyに接続
2. Build command: `npm run build`
3. Publish directory: `out` (Next.js static export使用時)

### GitHub Pages
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / root

## 5. 環境構築

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
```