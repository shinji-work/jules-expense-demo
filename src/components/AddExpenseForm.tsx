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
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-2xl font-bold">支出を追加</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            日付
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            カテゴリ
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>食費</option>
            <option>交通費</option>
            <option>趣味</option>
            <option>雑費</option>
            <option>その他</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            金額
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="例: 1000"
          />
        </div>
        <div>
          <label
            htmlFor="memo"
            className="block text-sm font-medium text-gray-700"
          >
            メモ
          </label>
          <input
            type="text"
            id="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="例: ランチ"
          />
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          追加
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
