var body = $response.body;
var url = $request.url;


if (url.search("/api/v1/auth/me$") != -1) {
    let obj = JSON.parse(body);
    obj.data.remaining_day = 300;
    body = JSON.stringify(obj);
}

$done({body});
