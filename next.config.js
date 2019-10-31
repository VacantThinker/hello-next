const fetch = require('isomorphic-unfetch');
const hostUrl = '/hello-next-pages';
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: prod ? '/hello-next-pages' : '',
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    const shows = data.map(entry => entry.show);

    shows.forEach(show => {
      paths[`/show/${show.id}`] = {
        page: '/show/[id]',
        query: { id: show.id }
      };
    });

    return paths;
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
};
