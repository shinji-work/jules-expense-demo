import React, { useEffect, useState } from 'react';
import { AddExpenseForm } from '../components/AddExpenseForm';
import type { Expense } from '../components/ExpenseList';
import { ExpenseList } from '../components/ExpenseList';
import { cardClass, headingClass } from '../components/styleClasses';

/**
 * ローカルストレージに保存する際のキー名です。
 */
const storageKey = 'jules-expense-tracker/expenses';

/**
 * 画面初期表示で利用するダミー支出データの一覧です。
 */
const defaultExpenses: Expense[] = [
  { date: '2024-06-01', category: '食費', amount: 2400, memo: 'ランチセット' },
  { date: '2024-06-03', category: '交通', amount: 520, memo: '電車代' },
  {
    date: '2024-06-04',
    category: 'エンタメ',
    amount: 1800,
    memo: '映画チケット'
  }
];

/**
 * ローカルストレージから支出データを読み込みます。保存済みデータがない場合はデフォルトの支出を登録します。
 *
 * @param storage Web Storage API の Storage インスタンス。
 * @returns ロードした支出データの配列。
 */
const loadExpensesFromStorage = (storage: Storage): Expense[] => {
  const storedExpenses = storage.getItem(storageKey);
  if (!storedExpenses) {
    storage.setItem(storageKey, JSON.stringify(defaultExpenses));
    return defaultExpenses;
  }

  try {
    const parsedExpenses = JSON.parse(storedExpenses) as Expense[];
    if (!Array.isArray(parsedExpenses)) {
      throw new Error('支出データが配列ではありません。');
    }
    return parsedExpenses;
  } catch (error) {
    console.warn('ローカルストレージからの読み込みに失敗しました。', error);
    storage.setItem(storageKey, JSON.stringify(defaultExpenses));
    return defaultExpenses;
  }
};

/**
 * 支出データをローカルストレージに保存します。
 *
 * @param storage Web Storage API の Storage インスタンス。
 * @param expenses 保存する支出データの配列。
 */
const saveExpensesToStorage = (storage: Storage, expenses: Expense[]): void => {
  storage.setItem(storageKey, JSON.stringify(expenses));
};

/**
 * 支出一覧と追加フォームを組み合わせたトップページを描画します。
 *
 * @returns 支出データの一覧と追加フォームを含む React 要素。
 */
const IndexPage = (): JSX.Element => {
  const [expenses, setExpenses] = useState<Expense[]>(defaultExpenses);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const expensesFromStorage = loadExpensesFromStorage(window.localStorage);
    setExpenses(expensesFromStorage);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') {
      return;
    }

    saveExpensesToStorage(window.localStorage, expenses);
  }, [expenses, isInitialized]);

  /**
   * 支出追加フォームから渡されたデータを一覧に反映します。
   *
   * @param newExpense 追加する支出データ。
   */
  const handleAddExpense = (newExpense: Expense): void => {
    setExpenses((previous) => [newExpense, ...previous]);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-0">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          支出トラッカー
        </h1>
        <p className="text-sm text-slate-600 sm:text-base">
          日々の支出を記録し、後から振り返るためのシンプルな管理ツールです。
        </p>
      </header>
      <section className={`${cardClass} space-y-6`}>
        <div>
          <h2 className={headingClass}>支出を追加</h2>
          <p className="mt-2 text-sm text-slate-600">
            日付と金額を入力すると一覧に反映されます。カテゴリとメモを利用して使途を細かく記録できます。
          </p>
        </div>
        <AddExpenseForm onAddExpense={handleAddExpense} />
      </section>
      <ExpenseList expenses={expenses} />
    </main>
  );
};

export default IndexPage;
