'use client';

import { useState } from 'react';
import { Expense } from '@/types/expense';

type AddExpenseFormProps = {
  addExpense: (expense: Omit<Expense, 'id'>) => void;
};

const AddExpenseForm = ({ addExpense }: AddExpenseFormProps) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState('食費');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !category || !amount) {
      alert('日付、カテゴリ、金額は必須です。');
      return;
    }
    addExpense({
      date,
      category,
      amount: Number(amount),
      memo,
    });
    setAmount('');
    setMemo('');
  };

  return (
    <div className="mb-8 rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold tracking-tight">支出を追加</h2>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                日付
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                カテゴリ
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
              >
                <option>食費</option>
                <option>交通費</option>
                <option>趣味</option>
                <option>雑費</option>
                <option>その他</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium">
                金額
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="例: 1000"
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="memo" className="text-sm font-medium">
                メモ
              </label>
              <input
                type="text"
                id="memo"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="例: ランチ"
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
              追加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
