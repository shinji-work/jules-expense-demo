import React from 'react';

/**
 * 支出・家計簿トラッカーのトップページを描画します。
 *
 * @returns 家計簿アプリのウェルカムメッセージを含むメインコンテンツ。
 */
export default function HomePage(): JSX.Element {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-16">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">家計簿トラッカー</h1>
        <p className="text-lg text-slate-700">
          Next.js と Tailwind CSS を利用した支出管理アプリケーションのスターターです。
        </p>
      </section>
      <section className="space-y-2 rounded-lg bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold text-slate-900">これからの開発について</h2>
        <p className="text-slate-700">
          収支の記録、レポート作成、可視化などの機能を段階的に追加できるよう、柔軟な初期設定を整えています。
        </p>
      </section>
    </main>
  );
}
