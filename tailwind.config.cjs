/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#000',

          secondary: '#2563eb',

          accent: '#4b5563',

          neutral: '#e5e7eb',

          'base-100': '#f3f4f6',

          info: '#d1d5db',

          success: '#16a34a',

          warning: '#374151',

          error: '#E01A2E',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
