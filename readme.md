#### Results: promisebench
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
promises-tunnckocore-promistein.js         2262       60.54
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
promises-tunnckocore-promistein.js         4234      156.57
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