import React, { useState } from 'react';
import { inputClass, labelClass, primaryButtonClass } from './styleClasses';
import type { Expense } from './ExpenseList';

/**
 * {@link AddExpenseForm} で新しい支出を作成する際に使用するデフォルトカテゴリの一覧です。
 */
const defaultCategories = [
  '食費',
  '交通',
  '住居',
  'エンタメ',
  'その他'
] as const;

/**
 * {@link AddExpenseForm} が受け取るプロパティを表します。
 */
export interface AddExpenseFormProps {
  /**
   * フォーム送信時に呼び出されるコールバック。新しい支出データを受け取り、親コンポーネントで状態を更新します。
   *
   * @param expense 追加された支出データ。
   */
  onAddExpense: (expense: Expense) => void;
}

/**
 * 支出追加フォームで内部的に扱う入力値を管理します。
 */
interface FormState {
  /** 入力された日付。 */
  date: string;
  /** 選択されたカテゴリ。 */
  category: (typeof defaultCategories)[number];
  /** 入力された金額。 */
  amount: string;
  /** 入力されたメモ。 */
  memo: string;
}

/**
 * 支出を追加するためのフォームを提供し、入力値をローカル状態で管理します。
 *
 * @param props フォーム送信時に呼び出すコールバックを含むプロパティ。
 * @returns 支出追加フォームを表す React 要素。
 */
export function AddExpenseForm({
  onAddExpense
}: AddExpenseFormProps): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    date: '',
    category: defaultCategories[0],
    amount: '',
    memo: ''
  });

  /**
   * 入力イベントを処理し、フォームのローカル状態を更新します。
   *
   * @param event 入力変更イベント。
   */
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = event.target;
    setFormState((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  /**
   * フォーム送信時にバリデーションを行い、新しい支出データを親コンポーネントに伝達します。
   *
   * @param event フォーム送信イベント。
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!formState.date || !formState.amount) {
      return;
    }

    const parsedAmount = Number.parseInt(formState.amount, 10);
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    const newExpense: Expense = {
      date: formState.date,
      category: formState.category,
      amount: parsedAmount,
      memo: formState.memo
    };

    onAddExpense(newExpense);
    setFormState({
      date: '',
      category: defaultCategories[0],
      amount: '',
      memo: ''
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="date">
          日付
        </label>
        <input
          className={inputClass}
          id="date"
          name="date"
          onChange={handleChange}
          type="date"
          value={formState.date}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="category">
          カテゴリ
        </label>
        <select
          className={inputClass}
          id="category"
          name="category"
          onChange={handleChange}
          value={formState.category}
        >
          {defaultCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="amount">
          金額
        </label>
        <input
          className={inputClass}
          id="amount"
          min="0"
          name="amount"
          onChange={handleChange}
          placeholder="0"
          type="number"
          value={formState.amount}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="memo">
          メモ
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="memo"
          name="memo"
          onChange={handleChange}
          placeholder="支出の詳細を入力"
          rows={3}
          value={formState.memo}
        />
      </div>
      <div className="pt-2">
        <button className={primaryButtonClass} type="submit">
          支出を追加
        </button>
      </div>
    </form>
  );
}
