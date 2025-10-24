import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import React from 'react';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

/**
 * アプリケーション全体で共通利用するメタデータを宣言します。
 */
export const metadata: Metadata = {
  title: 'Jules Expense Tracker',
  description: '家計簿アプリの初期構成'
};

/**
 * ルートレイアウトコンポーネントで利用するプロパティの定義です。
 */
export interface RootLayoutProps {
  /**
   * レイアウト内に描画する子要素。
   */
  children: React.ReactNode;
}

/**
 * アプリケーション全体のルートレイアウトを提供し、共通のHTML構造とフォント設定を適用します。
 *
 * @param children レイアウト内に描画する子要素。
 * @returns Next.js が利用するHTMLドキュメント全体の構造。
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" className={notoSansJp.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
