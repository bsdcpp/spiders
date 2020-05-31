var body = $response.body;
var url = $request.url;
const mep = "/api/v2/users/me";
const unit = "/learningpath/api/v2/units";

let obj = JSON.parse(body);

if (url.indexOf(mep) != -1) {
    obj.expirationDate = "2021-05-17T09:53:34";
}

if (url.indexOf("activities") != -1) {
    obj.active = true;
    obj.blockedBy = [];
} 
if (url.indexOf(unit) != -1) {
    obj.activities.forEach((book, index)=> {
        book.active = true;
        book.blockedBy = [];
      });
}
body = JSON.stringify(obj);  

$done({body});
