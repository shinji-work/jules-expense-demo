# 支出・家計簿トラッカー Next.jsプロジェクト

このリポジトリは支出・家計簿トラッカーのNext.jsプロジェクトです。

## 動作環境

- Node.js (v18.x.x 以上を推奨)
- npm

## 環境構築手順

1. **リポジトリをクローンします**

   ```bash
   git clone https://github.com/shinji-work/jules-expense-demo.git
   cd jules-expense-demo
   ```

2. **依存関係をインストールします**

   ```bash
   npm install
   ```

   または

   ```bash
   make install
   ```

3. **環境変数を設定します**

   ```bash
   cp .env.example .env
   ```

   `.env` ファイルには、アプリケーションのURLや開発サーバーのポート番号などの環境変数が定義されています。必要に応じて値を変更してください。

4. **開発サーバーを起動します**
   ```bash
   npm run dev
   ```
   または
   ```bash
   make dev
   ```
   ブラウザで `http://localhost:4000` を開くと、アプリケーションが表示されます。

## 実装済みの機能

- **支出一覧と追加フォーム**
  - `/` で支出の一覧表示と、新しい支出を追加するフォームが利用できます。
  - フォームから追加した支出は、ブラウザのローカルストレージに保存され、リロードしてもデータが保持されます。
