'use client';

import { useState, useEffect } from 'react';
import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import { Expense } from '@/types/expense';

export default function HomePage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    try {
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      }
    } catch (error) {
      console.error('Failed to parse expenses from localStorage', error);
      setExpenses([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    } catch (error) {
      console.error('Failed to save expenses to localStorage', error);
    }
  }, [expenses]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = { ...expense, id: new Date().toISOString() };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">支出管理アプリ</h1>
      </header>
      <main className="mx-auto max-w-4xl">
        <AddExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}
