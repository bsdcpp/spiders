var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/mobile/user/login/loginByPhoneToken") != -1) {
    let obj = JSON.parse(body);
    obj.vip = true;
    body = JSON.stringify(obj);
}

console.log(body);
$done({body});
