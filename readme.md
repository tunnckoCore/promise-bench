# promise-bench [![NPM version][npmjs-shields]][npmjs-url]
> Compare the performance and code of multiple async patterns

## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install promise-bench
$ npm test
```

#### Results: promisebench doxbee
```
file                                   time(ms)  memory(MB)
promises-bluebird-generator.js              727       19.15
callbacks-baseline.js                       793       24.24
promises-bluebird.js                        999       26.96
promises-tildeio-rsvp.js                   1440       44.14
promises-lvivski-davy.js                   1659       54.88
promises-cujojs-when.js                    1828       68.23
callbacks-caolan-async-waterfall.js        1877       45.27
promises-rkatic-p.js                       1970       75.13
promises-calvinmetcalf-lie.js              1974       69.22
promises-kaerus-component-uP.js            2142       76.63
promises-dfilatov-vow.js                   2154       92.34
promises-obvious-kew.js                    2857       99.19
promises-ecmascript6-native.js             3512       91.90
promises-zolmeister-promiz.js              3514      100.57
promises-rubenverborgh-promiscuous.js      3954      105.65
promises-ondras-promise.js                 4308      121.43
promises-then-promise.js                   4670      103.77
promises-medikoo-deferred.js               6719      135.53
promises-kriskowal-q.js                   24697      373.72

Platform info:
Linux 3.13.0-37-generic ia32
Node.JS 0.11.14
V8 3.26.33
Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz × 2
```

#### Results: promisebench doxbee-errors
```
file                                   time(ms)  memory(MB)
callbacks-baseline.js                       926       23.45
promises-bluebird-generator.js             1114       19.43
promises-bluebird.js                       1231       27.09
promises-lvivski-davy.js                   1313       43.43
promises-tildeio-rsvp.js                   1474       46.67
promises-kaerus-component-uP.js            1880       63.23
promises-cujojs-when.js                    2012       62.51
callbacks-caolan-async-waterfall.js        2146       45.30
promises-rkatic-p.js                       2240       76.90
promises-calvinmetcalf-lie.js              2359       83.89
promises-dfilatov-vow.js                   2552       81.71
promises-obvious-kew.js                    3137      112.25
promises-zolmeister-promiz.js              3555      105.64
promises-rubenverborgh-promiscuous.js      4189      109.71
promises-then-promise.js                   4222      100.93
promises-kriskowal-q.js                   22253      422.80
promises-ondras-promise.js                  OOM         OOM
promises-medikoo-deferred.js                OOM         OOM

Platform info:
Linux 3.13.0-37-generic ia32
Node.JS 0.11.14
V8 3.26.33
Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz × 2
```

#### Results: promisebench parallel
```
file                                   time(ms)  memory(MB)
promises-bluebird.js                       1559       98.38
promises-bluebird-generator.js             1742       99.85
promises-kaerus-component-uP.js            1922       96.89
promises-tildeio-rsvp.js                   2048      104.05
promises-lvivski-davy.js                   3125      122.02
promises-calvinmetcalf-lie.js              3401      181.55
callbacks-caolan-async-parallel.js         3425      111.21
callbacks-baseline.js                      3694       25.37
promises-dfilatov-vow.js                   3712      213.29
promises-cujojs-when.js                    3809      176.97
promises-then-promise.js                   4039      237.55
promises-rkatic-p.js                       4138      237.52
promises-ondras-promise.js                 4528      214.64
promises-ecmascript6-native.js             9461      298.12
promises-obvious-kew.js                    9956      340.46
promises-medikoo-deferred.js              12342      355.68
promises-rubenverborgh-promiscuous.js     17416      474.20
promises-zolmeister-promiz.js             53127      602.03

Platform info:
Linux 3.13.0-37-generic ia32
Node.JS 0.11.14
V8 3.26.33
Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz × 2
```
**Note**: Notice the `promises-kaerus-component-uP.js` - `micropromise` in npm. But yea, only in parallel tests. Pretty good.

Because of that I made `native-or-another` module that checks for native or `micropromise` as `native-or-bluebird` checks for native or `bluebird`


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]

**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/promise-bench/graphs/contributors).  
Released under the [`MIT`][license-url] license.



[npmjs-url]: http://npm.im/promise-bench
[npmjs-shields]: http://img.shields.io/npm/v/promise-bench.svg
[npmjs-install]: https://nodei.co/npm/promise-bench.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/promise-bench?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/promise-bench.svg

[license-url]: https://github.com/tunnckoCore/promise-bench/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/promise-bench
[travis-img]: https://travis-ci.org/tunnckoCore/promise-bench.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/promise-bench
[depstat-img]: https://david-dm.org/tunnckoCore/promise-bench.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
