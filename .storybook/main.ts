import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",

async viteFinal(config) {
    // Додаємо плагін Tailwind в Storybook
    const { default: tailwindPlugin } = await import('@tailwindcss/vite');

    return mergeConfig(config, {
      plugins: [
        tailwindPlugin(),
      ],
    });
  },
};

export default config;


