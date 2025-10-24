'use client';

import { Expense } from '@/types/expense';

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-tight">支出一覧</h2>
      </div>
      <div className="p-6 pt-0">
        {expenses.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            支出はまだありません。
          </p>
        ) : (
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    日付
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    カテゴリ
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                    金額
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    メモ
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {expenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle">{expense.date}</td>
                    <td className="p-4 align-middle">{expense.category}</td>
                    <td className="p-4 align-middle text-right">
                      {expense.amount.toLocaleString()}円
                    </td>
                    <td className="p-4 align-middle">{expense.memo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
