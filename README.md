# fastify-referrer-policy

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set the Referrer-Policy HTTP header

## Why?

You may know [referrer-policy](https://github.com/helmetjs/referrer-policy) as a [referrer-policy middleware](https://helmetjs.github.io/docs/referrer-policy/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with referrer-policy as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 30.22   202.71  9997.39
Req/Sec      26641.8 2684.94 28238
Bytes/Sec    4.8 MB  502 kB  5.05 MB

533k requests in 20s, 95.4 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 29.63   201.14  9988.9
Req/Sec      29880.8 1952.81 30704
Bytes/Sec    5.3 MB  329 kB  5.5 MB

598k requests in 20s, 107 MB read
```

So that's the reason and wish you like it. :)

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

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

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
