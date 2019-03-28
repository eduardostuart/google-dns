[![CircleCI](https://circleci.com/gh/eduardostuart/google-dns.svg?style=svg)](https://circleci.com/gh/eduardostuart/google-dns)

# Google DNS

A wrapper for [Google public DNS](https://dns.google.com).

> Not an official Google library and not affiliated with Google.

## [DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/dns-over-https)

> DNS-over-HTTPS greatly enhances privacy and security between a client and a recursive resolver,
> and complements DNSSEC to provide end-to-end authenticated DNS lookups.

# Install

```bash
yarn install google-dns
# or
npm i google-dns --save
```

# Usage

```js
import dns from 'google-dns'

(async () => {
  const response = await dns('google.com'/*, any */)

  console.log(response)
  // await dns('google.com', 'MX')
})()
//
```

# Tests

```bash
npm t
```

# License
Google DNS is open-sourced software licensed under the [MIT](./LICENSE) license.
