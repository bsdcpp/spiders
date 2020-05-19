/*
Surge4：
http-response ^https?:\/\/apis\.littlefox\.com\/api\/v1\/contents\/story\/DP.* requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/bsdcpp/spiders/master/lfen.js

*/

var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);

obj.data.contents.forEach((book, index)=> {
    book.service_info.ebook         = 'F';
    book.service_info.original_text = 'F';
    book.service_info.quiz          = 'F';
    book.service_info.service       = 'F';
    book.service_info.story         = 'F';
    book.service_info.vocabulary    = 'F';
  });
body = JSON.stringify(obj);  

$done({body});
