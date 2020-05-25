var body = $response.body;
var url = $request.url;
const path = "/course/courseInfo";

let obj = JSON.parse(body);

if (url.indexOf(path) != -1) {
    obj.chapterlist.forEach((book, index)=> {
        book.belongFlag = 1;
        book.chaptertype= 1;
      });
}
body = JSON.stringify(obj);  

$done({body});
