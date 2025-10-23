# jules-expense-demo

このリポジトリは支出・家計簿トラッカーのNext.jsプロジェクトです。セットアップ手順を記載してください。

## プロジェクト概要

Jules Expense Demo は Next.js（App Router）と TypeScript、Tailwind CSS を用いた家計簿トラッカーのスターター構成です。将来的な機能拡張（収支入力、ダッシュボード表示、レポート生成など）を想定し、フロントエンド開発に必要な lint/format ツールや共通スタイルを初期状態で整えています。

## 必要要件

- Node.js 18 以上
- npm 9 以上（もしくは互換パッケージマネージャー）

## セットアップ

1. 依存関係をインストールします。
   ```bash
   npm install
   ```
2. 開発サーバーを起動します。
   ```bash
   npm run dev
   ```
3. ブラウザで `http://localhost:3000` を開くと、初期画面を確認できます。

## スクリプト一覧

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番ビルドを作成します。
- `npm run start`: 本番ビルドをサーブします。
- `npm run lint`: ESLint による静的解析を実行します。
- `npm run format`: Prettier でコードを整形します。

## Tailwind CSS の利用

`app/globals.css` で Tailwind のベーススタイルを読み込み、コンポーネントではユーティリティクラスを利用してデザインを適用できます。`tailwind.config.js` に対象ディレクトリが定義されているため、`app/` 配下のコンポーネントにクラス名を記述するだけで自動的に解析されます。

## Lint / Format 設定

- ESLint: `next/core-web-vitals` と `plugin:prettier/recommended` をベースに設定しており、Next.js のベストプラクティスと Prettier の整形ルールを両立します。
- Prettier: シングルクオートを使用し、セミコロンあり・トレーリングカンマなしのルールに統一しています。

## ディレクトリ構成

```
app/
  globals.css   # Tailwind CSS のグローバルスタイル
  layout.tsx    # アプリ全体のレイアウト定義
  page.tsx      # トップページのコンポーネント
```

今後の機能追加に合わせて `components/` や `lib/` ディレクトリを作成し、共通ロジックや UI パーツを整理していく想定です。
