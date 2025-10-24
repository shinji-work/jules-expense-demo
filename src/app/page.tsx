'use client';

import { useState, useEffect } from 'react';
import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import { Expense } from '@/types/expense';

const HomePage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = { ...expense, id: new Date().toISOString() };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">支出管理アプリ</h1>
        </header>
        <main>
          <AddExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
