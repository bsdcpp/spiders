var body = $response.body;
var url = $request.url;
const course = "/course/courseInfo";
const enti = "/course/courseChapter";

let obj = JSON.parse(body);

if (url.indexOf(course) != -1) {
    obj.chapterlist.forEach((book, index)=> {
        book.belongFlag = 1;
        book.chaptertype= 1;
      });
    body = JSON.stringify(obj);  
} 
if(url.indexOf(enti) != -1) {
    obj.courseChapterEntity.chaptertype = 1;
    body = JSON.stringify(obj);  
}


$done({body});
