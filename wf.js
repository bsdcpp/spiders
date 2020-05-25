var body = $response.body;
var url = $request.url;
const course = "/course/courseInfo";
const enti = "course/courseChapter20";

let obj = JSON.parse(body);

if (url.indexOf(course) != -1) {
    obj.chapterlist.forEach((book, index)=> {
        book.belongFlag = 1;
        book.chaptertype= 1;
      });
} else if(url.indexOf(enti) != -1) {
    obj.courseChapterEntity.forEach((book, index)=> {
        book.chaptertype = 1;
      });
}
body = JSON.stringify(obj);  

$done({body});
