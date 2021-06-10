export default {
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js'],
        transformOptions: {
          plugins: [
            '@glimmer/babel-plugin-strict-template-precompile',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
  ],
  packageOptions: {
    polyfillNode: true
  }
}
