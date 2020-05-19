/*
洪恩双语绘本 vip

Surge4：
http-response https?:\/\/bookapi\.ihuman\.com\/v3\/get_book_info 
requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/bsdcpp/spiders/master/honghuiben.js?token=AAH4SPOFFVZHLBKQS2MLRKS6YOW26

Surge & QX MITM = api.vnision.com
*/

var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);
obj.is_vip = 0;
body = JSON.stringify(obj);  

$done({body});
