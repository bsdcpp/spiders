var body = $response.body;
var url = $request.url;


console.log("aaaaaaaaaaaaa");
if (url.search("/api/v1/auth/me") != -1) {
    console.log("bbbbbbbbbbbbbbbbbb");
    let obj = JSON.parse(body);
    obj.data.remaining_day = 300;
    
    body = JSON.stringify(obj);
    console.log(body);
}

$done({body});
