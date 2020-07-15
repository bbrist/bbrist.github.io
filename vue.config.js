const marked = require('marked');

const renderer = new marked.Renderer();

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              breaks: true,
              renderer,
            },
          },
        ],
      }],
    },
  },
};
