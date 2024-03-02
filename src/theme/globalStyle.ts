import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${theme}

  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-base);
    letter-spacing: var(--letter-spacing-base);
    line-height: var(--line-height-base);
    -webkit-font-smoothing: antialiased;
    width: 100%;
    background: var(--background-color);
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-family-heading);
    color: var(--color-text-headline);
  }


  h3 {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-sm);
  }

  h4 {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-md);
  }

  h5 {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-sm);
  }

  h6 {
    font-family: var(--font-family-body);
    font-size: var(--font-size-6xs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-xs);
    color: var(--color-text-headline);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    font-size: var(--font-size-3xs);
    line-height: var(--line-height-3xs);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-body);
  }
`;
