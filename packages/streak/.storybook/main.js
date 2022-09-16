module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    '@storybook/addon-interactions',
  ],
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all',
      minSize: 30 * 1024,
      maxSize: 244 * 1024,
    };
    config.performance = {
      ...config.performance,
      maxAssetSize: 500 * 1024,
      maxEntrypointSize: 500 * 1024,
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
