module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: [
            "BASE_URL",
            "FOOTBALL_MARKET",
            "FOOTBALL_FIXTURES",
            "FOOTBALL_MATCHES",
            "FOOTBALL_LEAGUES",
          ],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  };
};
