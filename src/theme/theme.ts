import { css } from 'styled-components';

export const theme = css`
  :root {
    /** Colour **/

    --color-secondary-colonial: #fdf3d4;
    --color-secondary-porsche: #f8e7b2;
    --color-secondary-saffron: #fac661;
    --color-secondary-sun: #fdb010;
    --color-secondary-cookie: #6d4a00;

    --color-primary-500: #353635;
    --color-primary-400: #535453;
    --color-primary-300: #828282;

    --color-accent-rose: #f5e4e2;
    --color-accent-pink: #f4c8c1;
    --color-accent-tan: #e0948b;
    --color-accent-mojo: #cc4435;
    --color-accent-wine: #94050d;

    --color-accent-iceberg: #e3f0f7;
    --color-accent-azure: #ddeaf0;
    --color-accent-jeans: #61b7da;
    --color-accent-sky: #40aad4;
    --color-accent-ocean: #007ba3;

    --color-accent-lavender: #e7dbfc;
    --color-accent-violet: #cfbcf2;
    --color-accent-indigo: #9564ed;
    --color-accent-grape: #442878;

    --color-text-white: #fff;
    --color-text-black: #000;
    --color-text-lightgray: #ccc;
    --color-text-gray: #9c9c9c;
    --color-text-body: #545454;
    --color-text-headline: #2c2c2c;
    --color-text-input: #333333;

    --color-bg-pearl: #fcf7d9;
    --color-bg-beige: #f9f7ea;
    --color-bg-merino: #f6ede8;
    --color-bg-grey-green: #dee5de;

    --color-background-white: #ffffff;
    --color-background-black: #000000;
    --color-background-lightgray: #cccccc;

    --color-input-error: #de2b52;
    --color-input-warning: #ffbf0f;
    --color-input-success: #3b9905;
    --color-input-border-disabled: #c2b9b4;
    --color-input-background-disabled: #e8e3e0;
    --color-input-disabled: #5c534f;

    /** Typography **/

    --font-family-heading: 'Sohne Breit', sans-serif;
    --font-family-body: 'Manrope', sans-serif;
    --font-family-quote: 'Moret', sans-serif;

    --font-size-6xs: 0.75rem; /* 12px */
    --font-size-5xs: 0.875rem;
    --font-size-4xs: 1rem;
    --font-size-3xs: 1.125rem; /* 18px */
    --font-size-2xs: 1.375rem;
    --font-size-xs: 1.625rem;
    --font-size-sm: 1.75rem;
    --font-size-md: 2.125rem; /* 34px */
    --font-size-lg: 2.625rem;
    --font-size-xl: 3rem; /* 48px */
    --font-size-2xl: 3.625rem;
    --font-size-3xl: 6rem;
    --font-size-4xl: 7.75rem; /* 124px */

    --line-height-7xs: 0.9375rem;
    --line-height-6xs: 1.1875rem; /* 19px */
    --line-height-5xs: 1.375rem;
    --line-height-4xs: 1.5rem;
    --line-height-3xs: 1.625rem;
    --line-height-2xs: 1.75rem;
    --line-height-xs: 1.875rem;
    --line-height-sm: 2.125rem;
    --line-height-md: 2.5rem; /* 40px */
    --line-height-lg: 2.875rem;
    --line-height-xl: 3.375rem;
    --line-height-2xl: 4rem;
    --line-height-3xl: 6.375rem;
    --line-height-4xl: 8.125rem; /* 130px */

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semiBold: 600;
    --font-weight-bold: 700;

    /** Radius **/

    --radius-4xs: 0.25rem;
    --radius-3xs: 0.3125rem;
    --radius-2xs: 0.5rem; //8px
    --radius-xs: 1rem;
    --radius-sm: 1.25rem;
    --radius-md: 2.5rem;

    /** Spacing **/

    --spacing-6xs: 0.125rem;
    --spacing-5xs: 0.25rem;
    --spacing-4xs: 0.375rem;
    --spacing-3xs: 0.5rem; // 8px
    --spacing-2xs: 0.625rem; //10px
    --spacing-xs: 0.75rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem; //24px
    --spacing-lg: 2rem;
    --spacing-xl: 2.5rem; // 40px
    --spacing-2xl: 3.5rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 5rem; // 80px
  }

  .theme-base {
    --background-color: var(--color-bg-beige);
    --font-family-base: var(--font-family-body);
    --font-size-base: var(--font-size-2xs);
    --font-weight-base: var(--font-weight-medium);
    --letter-spacing-base: 0;
    --line-height-base: var(--line-height-sm);
  }
`;
