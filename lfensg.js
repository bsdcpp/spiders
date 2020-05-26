var body = $response.body;
var url = $request.url;
const dstory = "/api/v1/contents/story";
const dsong = "/api/v1/contents/song";
const cid = "/api/v1/contents/C0";

let obj = JSON.parse(body);

if (url.indexOf(dstory) != -1 || url.indexOf(dsong) != -1) {
    if (obj.data.hasOwnProperty('contents')) {
        obj.data.contents.forEach((book, index)=> {
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



$done({body});
