module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@types': './src/types',
            '@core': './src/core',
            '@services': './src/services',
            '@components': './src/components',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  };
};
