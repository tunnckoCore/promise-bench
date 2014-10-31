### Resoluts
```
results for 10000 parallel executions, 1 ms per I/O op

file                                   time(ms)  memory(MB)
promises-bluebird.js                       1739       88.87
promises-bluebird-generator.js             1869      101.29
promises-kaerus-component-uP.js            2243       97.04
promises-tildeio-rsvp.js                   2527      103.92
promises-calvinmetcalf-lie.js              3649      186.39
promises-lvivski-davy.js                   3766      125.99
callbacks-caolan-async-parallel.js         3838      111.05
promises-dfilatov-vow.js                   4424      215.21
callbacks-baseline.js                      4471       25.39
promises-cujojs-when.js                    4563      178.69
promises-tunnckocore-promistein.js         4669      154.41
promises-then-promise.js                   5014      237.46
promises-rkatic-p.js                       5132      241.18
promises-ondras-promise.js                 5462      214.65
promises-ecmascript6-native.js            11151      298.71
promises-obvious-kew.js                   13179      399.07
promises-medikoo-deferred.js              14651      355.40
promises-rubenverborgh-promiscuous.js     21732      474.20
promises-zolmeister-promiz.js             61242      602.04

Platform info:
Linux 3.13.0-37-generic ia32
Node.JS 0.11.14
V8 3.26.33
Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz × 2
```
**Note**: Notice the `promises-kaerus-component-uP.js` - `micropromise` in npm. But yea, only in parallel tests. Pretty good.

Because of that I made `native-or-another` module that checks for native or `micropromise` as `native-or-bluebird` checks for native or `bluebird`