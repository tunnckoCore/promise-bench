global.useOndrasPromise = true;
global.useQ = false;
var OndrasPromise = require("../../ondras-promise/promise");
require('../lib/fakesP');

module.exports = function upload(stream, idOrPath, tag, done) {
    var queries = new Array(global.parallelQueries);
    var tx = db.begin();

    for( var i = 0, len = queries.length; i < len; ++i ) {
        queries[i] = FileVersion.insert({index: i}).execWithin(tx);
    }

    OndrasPromise.all(queries).then().then(function() {
        tx.commit();
        done();
    }, function(err) {
        tx.rollback();
        done(err);
    });
}
