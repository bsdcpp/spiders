var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/mobile/user/login/loginByPhoneToken") != -1) {
    let obj = JSON.parse(body);
    obj.vip = True;
    body = JSON.stringify(obj);
}

$done({body});
