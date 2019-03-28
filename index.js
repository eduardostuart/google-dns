const got = require('got');

module.exports = async (domain, type = 'any') => {
  if (!domain || typeof domain !== 'string') {
    throw Error('Invalid domain');
  }

  const { body } = await got(`https://dns.google.com/resolve?name=${domain}&type=${type}`, {
    json: true,
  });

  return body;
};
