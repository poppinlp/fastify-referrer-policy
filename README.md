# fastify-referrer-policy

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set the Referrer-Policy HTTP header

## Why?

You may know [referrer-policy](https://github.com/helmetjs/referrer-policy) as a [referrer-policy middleware](https://helmetjs.github.io/docs/referrer-policy/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Difference

This plugin has passed all [referrer-policy](https://github.com/helmetjs/referrer-policy) test cases.
And no difference in options.

## Install

Via npm:

```shell
npm i fastify-referrer-policy
```

Via yarn:

```shell
yarn add fastify-referrer-policy
```

## Usage

```js
const fastify = require('fastify');
const fastifyReferrerPolicy = require('fastify-referrer-policy');

const app = fastify();
app.register(fastifyReferrerPolicy);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Options

This plugin has the same options as the middleware in helmet.

### policy {string}

Set `Referrer-Policy` to this value if it's a valid one. Default is `no-referrer`. Will use default value for any invalid input. Valid list:

- no-referrer
- no-referrer-when-downgrade
- same-origin
- origin
- strict-origin
- origin-when-cross-origin
- strict-origin-when-cross-origin
- unsafe-url

You could [read the spec](https://www.w3.org/TR/referrer-policy/#referrer-policies) for more information.

## Changelog

- 0.3.0
  - Fix can't set empty string
  - Update test case
- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-referrer-policy.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-referrer-policy
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-referrer-policy.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-referrer-policy?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-referrer-policy.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-referrer-policy
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-referrer-policy.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-referrer-policy#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-referrer-policy.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-referrer-policy.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-referrer-policy.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-referrer-policy
