var body = $response.body;
var url = $request.url;

if (url.indexOf("get_book_info") != -1 ) {
    let obj = JSON.parse(body);
    obj.result.books.forEach((book, index)=> {
        book.is_vip = 0;
      });
    body = JSON.stringify(obj);
}

if (url.indexOf("get_level_book_info") != -1 ) {
    let obj = JSON.parse(body);
    obj.result.levels.forEach((level, index)=> {
        level.books.forEach((book, index2)=> {
            book.is_vip = 0;
        })
      });
    body = JSON.stringify(obj);
}

$done({body});
