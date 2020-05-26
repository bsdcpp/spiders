let body = $response.body
let url  = $request.url;
obj = JSON.parse(body)

if (url.indexOf("/api/v1/contents/story") != -1) {
    obj['data']['contents'].forEach((book, index)=> {
        book['service_info.service']       = 'F';
        book['service_info.story']         = 'F';
      });
    body = JSON.stringify(obj);  
}
if (url.indexOf("/api/v1/contents/C0") != -1 && url.indexOf("player") != -1) {
    delete obj['data.preview_time'];
    book = obj['data.next_content'];
    book['service_info.service']       = 'F';
    book['service_info.story']         = 'F';
    body = JSON.stringify(obj);  
}

$done({body});
