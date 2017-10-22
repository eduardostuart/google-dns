'use strict';
const got = require('got');

module.exports = (url, type) => {
  if (!type) {
    type = 'any';
  }

  if (typeof url !== 'string') {
    return Promise.reject(new Error('URL required'));
  }

  return got(`https://dns.google.com/resolve?name=${url}&type=${type}`)
    .then(res => res.body);
};
