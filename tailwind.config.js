/** @type {import('tailwindcss').Config} */
/**
 * Tailwind CSS がクラス名を解析する対象パスとテーマ拡張を定義します。
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
