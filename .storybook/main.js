// .storybook/main.js

module.exports = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",  // Docs addon for documentation
    "@storybook/addon-onboarding",  // Onboarding (optional)
    "@chromatic-com/storybook",  // Visual testing addon (optional)
    "@storybook/experimental-addon-test",  // Experimental testing (optional)
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
