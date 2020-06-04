var body = $response.body;
var url = $request.url;
const course = "/course/courseInfo";
const enti = "/course/courseChapter";
const vip = "/vip/queryVipInfo";



if (url.indexOf(course) != -1) {
    let obj = JSON.parse(body);
    obj.chapterlist.forEach((book, index)=> {vipEndTime = 
        book.belongFlag = 1;
        book.chaptertype= 1;
      });
    body = JSON.stringify(obj);  
} 
if(url.indexOf(enti) != -1) {
    let obj = JSON.parse(body);
    obj.courseChapterEntity.chaptertype = 1;
    body = JSON.stringify(obj);  
}

if(url.indexOf(vip) != -1) {
    let obj = JSON.parse(body);
    obj.memberEntity.vipType = 1;
    obj.memberEntity.vipStartTime = 1546879999000;
    obj.memberEntity.vipEndTime = 1626879999000;
    body = JSON.stringify(obj);  
}



$done({body});
