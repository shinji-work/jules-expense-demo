import React from 'react';
import { cardClass, headingClass } from './styleClasses';

/**
 * 支出項目を構成するデータ構造を表します。
 */
export interface Expense {
  /** 支出を記録した日付 (YYYY-MM-DD 形式)。 */
  date: string;
  /** 支出のカテゴリ名。 */
  category: string;
  /** 支出金額 (円)。 */
  amount: number;
  /** 支出に関するメモ。 */
  memo: string;
}

/**
 * {@link ExpenseList} コンポーネントに渡すプロパティを定義します。
 */
export interface ExpenseListProps {
  /** 表示する支出項目の配列。 */
  expenses: Expense[];
}

/**
 * 支出データの一覧をカード上のテーブルとして表示します。
 *
 * @param props 表示対象の支出配列を含むプロパティ。
 * @returns 支出一覧のテーブルを含む React 要素。
 */
export function ExpenseList({ expenses }: ExpenseListProps): JSX.Element {
  return (
    <section className={cardClass}>
      <h2 className={headingClass}>最近の支出</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr className="text-left text-sm font-semibold text-slate-600">
              <th className="px-4 py-3">日付</th>
              <th className="px-4 py-3">カテゴリ</th>
              <th className="px-4 py-3 text-right">金額</th>
              <th className="px-4 py-3">メモ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {expenses.map((expense, index) => (
              <tr
                key={`${expense.date}-${expense.category}-${index}`}
                className="hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                  {expense.date}
                </td>
                <td className="px-4 py-3">{expense.category}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-slate-900">
                  ¥{expense.amount.toLocaleString('ja-JP')}
                </td>
                <td className="px-4 py-3">{expense.memo}</td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td
                  className="px-4 py-6 text-center text-slate-500"
                  colSpan={4}
                >
                  まだ支出データがありません。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
