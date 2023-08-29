import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand-50: #f0fdfa;
    --color-brand-100: #ccfbf1;
    --color-brand-200: #99f6e4;
    --color-brand-300: #5eead4;
    --color-brand-400: #2dd4bf;
    --color-brand-500: #14b8a6;
    --color-brand-600: #0d9488;
    --color-brand-700: #0f766e;
    --color-brand-800: #115e59;
    --color-brand-900: #134e4a;

    --color-gray-0: #fff;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;

    --color-red-600: #dc2626;
    --color-red-700: #b91c1c;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-gray-100);
    color: var(--color-gray-700);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  button,
  input {
    font: inherit;
  }
`;

export default GlobalStyles;
