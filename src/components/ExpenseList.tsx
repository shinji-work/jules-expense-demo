'use client';

import { Expense } from '@/types/expense';

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">支出一覧</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">支出はまだありません。</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  日付
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  カテゴリ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  金額
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  メモ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.amount.toLocaleString()}円
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.memo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
