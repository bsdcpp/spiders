var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);

obj.audio.chapters.forEach((book, index)=> {
    book.is_free = true;
  });
body = JSON.stringify(obj);  

$done({body});
