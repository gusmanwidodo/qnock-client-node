/**
 * Qnock Client
 * author: gusman@codigo.id
 */

const request = require("request")

const qnock = (options) => {

    const getToken = (cb) => {

        var options = {
            method: 'POST',
            url: options.host + "token"
        }

        const callback = (error, response, body) => {

            if (error) throw new Error(error)

            result = JSON.parse(body)

            cb(result.DATA)
        }

        request(options, callback).auth(options.id, options.secret, true)
    }

    return {

        send: (url, formdata = {}, post = "POST") => {

            getToken(token => {

                formdata.token = token

                formdata.app_secret = options.secret

                var requestOptions = {
                    url: options.host + url,
                    method: post,
                    body: JSON.stringify(formdata),
                    headers: { "content-type": "application/json" }
                }

                return Promise((resolve, reject) => {

                    request(requestOptions, (error, response, body) => {

                        if (error) {
                            reject(new Error(error))
                            return
                        }

                        result = JSON.parse(body)

                        console.log("notif send!")

                        resolve(result)

                    }).auth(options.id, options.secret, false)
                })
            })
        }
    }
}


module.exports = qnock



//

// pemakaian

const qnock = require('./index')

const qnockObject = qnock(options)

qnockObject
    .send('http://somedomain.com/some/url', {}, 'POST')
    .then(result => {
        console.log(result)
    }, error => {
        console.log(error)
    })
