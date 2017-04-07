var request = require("request");

var qnock = {

    host: "",
    id: "",
    secret: "",
    fcm: "",
    token: "",

    config: function (options) {
        this.host = options.host;
        this.id = options.id;
        this.secret = options.secret;
        this.fcm = options.fcm;

        // this.getToken();
    },

    getToken: function () {

        var options = {
            method: 'POST',
            url: this.url.token
        };

        request(options, (error, response, body) => {

            if (error) throw new Error(error);

        result = JSON.parse(body);

        this.token = result.DATA;

        console.log(this.token);

    }).auth(this.id, this.secret, false);

    },

    postRequest: function (options) {

        request(options, (error, response, body) => {

            if (error) throw new Error(error);

        result = JSON.parse(body);

        return result;

    }).auth(this.id, this.secret, false);

    }

}

if (typeof module !== 'undefined' && module.exports)
    module.exports = qnock;
