var url = require('url');
//This is Prod
var APP_SECRET = 'cbaf96ec-9f3c-4679-b360-fb7139b0fb6e';
//This is Test
//var APP_SECRET = '72d6a210-92c5-4fab-b052-d434937c906a';
var crypto = require("crypto");
function Authentication() {
    this.authenticate = function(req, res, next) {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        if (query.instance || query.origCompId || query.compId) {
            verify = verifyInstance(query.instance, APP_SECRET);
            console.log(verify);
            if (verify.valid) {
                var key = JSON.parse(verify.key).instanceId + ':';
                if (query.origCompId) {
                    key = key + query.origCompId;
                } else if (query.compId) {
                    key = key + query.compId;
                }
                req.key = key;
                next();
            } else {
                res.render('invalid-secret');
            }
        } else {
            res.render('invalid-secret');
        }
    }
}
function verifyInstance(instance, secret) {
    var pair = instance.split('.');
    var signature = decode(pair[0], 'binary');
    var data = pair[1];
    var hmac = crypto.createHmac('sha256', secret);
    var newSignature = hmac.update(data).digest('binary');
    return {valid: signature === newSignature,
        key: new Buffer(data, 'base64').toString()};
}
function decode(data, encoding) {
    encoding = encoding === undefined ? 'utf8' : encoding
    var buf = new Buffer(data.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
    return encoding ? buf.toString(encoding) : buf;
}
module.exports = Authentication;