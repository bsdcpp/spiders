var body = $response.body;
var url = $request.url;

if (url.indexOf("get_book_info") != -1 ) {
    let obj = JSON.parse(body);
    obj.result.books.forEach((book, index)=> {
        book.is_vip = 0;
      });
    body = JSON.stringify(obj);
}



$done({body});
