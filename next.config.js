const fetch = require('isomorphic-unfetch');
// const hostUrl = 'https://vacantthinker.github.io/hello-next-pages';
// const hostUrl = '/hello-next-pages';
const hostUrl = '';
const prod = process.env.NODE_ENV === 'production';

const fs = require('fs');
const path = require('path');

module.exports = {
  exportPathMap: function() {
    // Async异步 --> 现在: 同步
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    const readFileSync = fs.readFileSync(
      path.join(__dirname, 'batman.json'),
      'utf-8'
    );
    const batmanArr = JSON.parse(readFileSync);
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();

    batmanArr.map(data => {
      const show = data.show;

      paths[`/show/${show.id}`] = {
        page: '/show/[id]',
        query: { id: show.id }
      };
    });

    return paths;
  },
  assetPrefix: prod ? hostUrl : '',
  env: {
    HOST_URL: prod ? hostUrl : ''
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  }
  // target: 'serverless'
};
