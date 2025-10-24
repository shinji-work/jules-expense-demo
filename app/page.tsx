'use client';

import React from 'react';
import IndexPage from '../pages';

/**
 * App Router から Pages Router の実装を利用し、支出一覧とフォームを表示します。
 *
 * @returns 支出トラッカーのトップページを描画する React 要素。
 */
export default function HomePage(): JSX.Element {
  return <IndexPage />;
}
