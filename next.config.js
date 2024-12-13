const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg
  }
};