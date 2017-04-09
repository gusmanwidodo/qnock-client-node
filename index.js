/**
 * Qnock Client
 * author: gusman@codigo.id
 */

var request = require("request");

function qnock (options) {

    this.host = options.host;
    this.id = options.id;
    this.secret = options.secret;
    this.fcm = options.fcm;

    this.getToken = function (cb) {

        var options = {
            method: 'POST',
            url: this.host + "token"
        };

        function callback(error, response, body) {

            if (error) throw new Error(error);

            result = JSON.parse(body);

            cb(result.DATA);

        }

        request(options, callback).auth(this.id, this.secret, true);

    };

    this.send = function (url, formdata = {}, post = "POST") {

        var _this = this;

        return new Promise(function (resolve, reject) {

            _this.getToken(function (token) {

                formdata.token = token;
                formdata.app_secret = _this.secret;

                var options = {
                    url: _this.host + url,
                    method: post,
                    body: JSON.stringify(formdata),
                    headers: { "content-type": "application/json"}
                };

                request(options, function (error, response, body) {

                    if (error) {
                        reject(new Error(error));
                        return;
                    }

                    console.log("notif send!");

                    result = JSON.parse(body);

                    resolve(result);

                }).auth(_this.id, _this.secret, false);

            });

        });

    };

}

if (typeof module !== 'undefined' && module.exports)
    module.exports = qnock;
