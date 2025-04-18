import { mergeConfig } from 'vite';

export default {
  framework: {
    name: '@storybook/react-vite', // ✅ using Vite is fine
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // custom Vite config if needed
    });
  },
  docs: {
    autodocs: true, // ✅ Enables the auto-generated Docs tab
  },
};
