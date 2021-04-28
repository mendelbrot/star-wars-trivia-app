module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            models: './src/models',
            navigation: './src/navigation',
            screens: './src/screens',
            services: './src/services',
            types: './src/types',
          },
        },
      ]
    ]
  };
};
