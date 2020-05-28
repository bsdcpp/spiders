var body = $response.body;
var url = $request.url;
const dstory = "/api/v1/contents/story";
const dsong = "/api/v1/contents/song";
const cid = "/api/v1/contents/C0";

let obj = JSON.parse(body);


//let obj2 = JSON.parse(body);
//console.log(obj2.data.contents[10].service_info);

$done({body});
