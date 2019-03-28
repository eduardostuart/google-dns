import test from 'ava';
import nock from 'nock';
import dns from '.';

const expectedRes = {
  Status: 0,
  TC: false,
  RD: true,
  RA: true,
  AD: false,
  CD: false,
  Question: [{ name: 's.tuart.me.', type: 255 }],
  Answer: [{
    name: 's.tuart.me.', type: 1, TTL: 3599, data: '188.226.167.240',
  }, {
    name: 's.tuart.me.', type: 2, TTL: 1799, data: 'ns1.digitalocean.com.',
  }, {
    name: 's.tuart.me.', type: 2, TTL: 1799, data: 'ns2.digitalocean.com.',
  }, {
    name: 's.tuart.me.', type: 2, TTL: 1799, data: 'ns3.digitalocean.com.',
  }, {
    name: 's.tuart.me.', type: 6, TTL: 1799, data: 'ns1.digitalocean.com. hostmaster.s.tuart.me. 1503944193 10800 3600 604800 1800',
  }, {
    name: 's.tuart.me.', type: 15, TTL: 1799, data: '1 aspmx.l.google.com.',
  }, {
    name: 's.tuart.me.', type: 15, TTL: 1799, data: '5 alt1.aspmx.l.google.com.',
  }, {
    name: 's.tuart.me.', type: 15, TTL: 1799, data: '5 alt2.aspmx.l.google.com.',
  }, {
    name: 's.tuart.me.', type: 15, TTL: 1799, data: '10 alt3.aspmx.l.google.com.',
  }, {
    name: 's.tuart.me.', type: 15, TTL: 1799, data: '10 alt4.aspmx.l.google.com.',
  }],
  Comment: 'Response from 1.1.1.1',
};

test('gets dns information using url', async (t) => {
  nock('https://dns.google.com')
    .get('/resolve?name=s.tuart.me&type=any')
    .reply(200, expectedRes);

  t.deepEqual(await dns('s.tuart.me'), expectedRes);
});

test('rejects when url is missing', async (t) => {
  await t.throwsAsync(dns());
});

test('rejects if wrong type', async (t) => {
  nock('https://dns.google.com')
    .get('/resolve?name=s.tuart.me&type=aasdfgny')
    .reply(404);

  await t.throwsAsync(dns('s.tuart.me'));
});
