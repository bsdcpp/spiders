var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);

obj.result.vip_type = 1;
body = JSON.stringify(obj);  

$done({body});
