# Jules Expense Demo

Jules Expense Demo は Next.js 14 と TypeScript、Tailwind CSS を用いた支出管理アプリケーションの学習用リポジトリです。初期状態で共通レイアウト、UI コンポーネント、コード品質ツールが整っており、支出一覧と追加フォームを備えたトップページから開発を始められます。

## 主な機能

- ✅ **支出一覧と追加フォームの初期画面を実装**: ダミーデータを読み込みつつ、入力フォームから新しい支出を登録できます。
- 💾 **ローカルストレージへの永続化**: ブラウザを再読み込みしても、これまでに追加した支出が保持されます。
- 🎨 **Tailwind CSS ベースの UI**: 共通スタイルクラスを `components/styleClasses.ts` にまとめ、フォームやカードのデザインに一貫性を持たせています。
- 🧩 **再利用しやすいコンポーネント構成**: `ExpenseList` と `AddExpenseForm` を切り出し、今後の画面拡張に備えています。

## セットアップ手順

開発環境の前提条件:

- Node.js 18 以上
- npm 9 以上（または互換パッケージマネージャー）

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開き、支出一覧と追加フォームの画面を確認してください。

## プロジェクト構成

```
app/
  globals.css        # Tailwind CSS のグローバルスタイル
  layout.tsx         # ルートレイアウトと共通メタデータ
  page.tsx           # App Router から Pages Router 実装を呼び出すブリッジ
components/
  AddExpenseForm.tsx # 支出追加フォームコンポーネント
  ExpenseList.tsx    # 支出一覧表示コンポーネント
  styleClasses.ts    # 共通スタイルクラスの定義
pages/
  index.tsx          # 支出一覧とフォームを表示するトップページ
```

必要に応じて `components/` 配下に UI パーツを追加し、`pages/` または `app/` ディレクトリでルーティングを定義できます。

## 利用可能なスクリプト

- `npm run dev`: Next.js の開発サーバーを起動します。
- `npm run build`: 本番用ビルドを作成します。
- `npm run start`: 本番ビルドを起動します。
- `npm run lint`: ESLint による静的解析を実行します。
- `npm run format`: Prettier でコードを整形します。

## コーディングガイド

- TypeScript で公開する関数・コンポーネントには TSDoc 形式のコメントを追加しています。新規コードでも同様のスタイルを推奨します。
- UI の共通化が必要な場合は `components/styleClasses.ts` にユーティリティクラスを追加し、各コンポーネントから参照してください。
- 状態管理は `useState` をベースにしています。フォームデータを他ページと共有する場合は、必要に応じてコンテキストや状態管理ライブラリを検討してください。

## 今後の拡張アイデア

- カテゴリや金額でのフィルタリング・ソート機能
- 月ごとの集計やグラフ表示
- 認証を含むマルチユーザー対応

本リポジトリを基礎として、家計簿アプリケーションの機能拡張や Next.js の学習を進めてください。
