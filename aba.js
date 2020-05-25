var body = $response.body;
var url = $request.url;


let obj = JSON.parse(body);

if (url.indexOf("activities") != -1) {
    obj.active = true;
    obj.blockedBy = [];
} else {
    obj.activities.forEach((book, index)=> {
        book.active = true;
        book.blockedBy = [];
      });
}
body = JSON.stringify(obj);  

$done({body});
