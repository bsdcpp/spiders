var body = $response.body;
var url = $request.url;
const dstory = "/api/v1/contents/story";
const dsong = "/api/v1/contents/song";
const cid = "/api/v1/contents/C0";



if (url.search("/api/v1/auth/me") != -1) {
    let obj = JSON.parse(body);
    obj.data.remaining_day = 300;
    
    body = JSON.stringify(obj);
}

if (url.indexOf(dstory) != -1 || url.indexOf(dsong) != -1) {
    let obj = JSON.parse(body);
    if (obj.data.hasOwnProperty('contents')) {
        obj.data.contents.forEach((book, index)=> {
            if (book.hasOwnProperty('user_service_info')) {
                delete book.user_service_info;
            }
            //book.service_info.ebook         = 'F';
            //book.service_info.original_text = 'F';
            //book.service_info.quiz          = 'F';
            book.service_info.service       = 'F';
            book.service_info.story         = 'F';
            //book.service_info.vocabulary    = 'F';
          });
    }
    body = JSON.stringify(obj);  
}
if (url.indexOf(cid) != -1 && url.indexOf("player") != -1) {
    let obj = JSON.parse(body);
    delete obj.data.preview_time;
    if (obj.data.hasOwnProperty('next_content')) {
        book = obj.data.next_content;
        //book.service_info.ebook         = 'F';
        //book.service_info.original_text = 'F';
        //book.service_info.quiz          = 'F';
        book.service_info.service       = 'F';
        book.service_info.story         = 'F';
        //book.service_info.vocabulary    = 'F';
    }
    body = JSON.stringify(obj);  
}

//let obj2 = JSON.parse(body);
//console.log(obj2.data.contents[10].service_info);

$done({body});
