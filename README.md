# Qnock Client JS
This package is used for connecting and pushing notification expecially for API service using NODE server.


**NOTE**: You can not use this package until you get client id and secret from Qnock.

## Installation

```sh
$ npm install --save qnock-client
```

## Usage

Basic usage example:

```javascript
var qnock = require('qnock-client');
var notif = new qnock({
        "host": config_env.api_qnock,
        "id": config_env.api_qnock_id,
        "secret": config_env.api_qnock_secret,
        "fcm": config_env.api_qnock_fcm
    });
    
var formData = {
    "user_token_id":["c1Edt51CcG0:APA91bHnNgZK2BW_4cvA-_ZkEk46VtBzlyy1fgbYouyr2BelrJfcpjLLBKIWAtA0p6nNft0pt9Wdwi5ziZVoaiKjk4_H3f_Mn1ZJemm8UycSsReF8VyGjiPyYmnuz_W80Y3GlOiF00-u","f0gO34iauQU:APA91bH5x0f0D-zn3mzhN9JF5TRCRPkHQfvJY_kpGJtlqXQoP__yw_KaJvBMoUwQ60uq4jSgCAYQjCNYjrtoQQomH2G3t7IdjL7WZK9b_t2DQhey8iC0WKFmdOl0NC3codRaTSb00r_A","c1Edt51CcG0:APA91bHnNgZK2BW_4cvA-_ZkEk46VtBzlyy1fgbYouyr2BelrJfcpjLLBKIWAtA0p6nNft0pt9Wdwi5ziZVoaiKjk4_H3f_Mn1ZJemm8UycSsReF8VyGjiPyYmnuz_W80Y3GlOiF00-u"],
    "message":{"body":{"message":"Berita olimpiyade 2016"},"alert":{"title":"Berita olimpiyade 2016","body":"Berita olimpiyade 2016","icon":"ic_stat_name","click_action":"fcm.ACTION.HELLO"}},
    "unix_id":"#ghjmSDV"
};

notif.send('push/android', formData, 'POST');    

notif.send('push/iphone', formData, 'POST');    
```

For complete endpoint please contact us at support@codigo.id

## License

[ISC](LICENSE)
