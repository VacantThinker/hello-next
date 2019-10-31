// const hostUrl = 'https://vacantthinker.github.io/hello-next-pages';
// const hostUrl = '/hello-next-pages';
const hostUrl = '';
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? hostUrl : ''
};
