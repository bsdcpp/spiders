var body = $response.body;
var url = $request.url;
const mep = "/api/v2/users/me";
const unit = "/learningpath/api/v2/units";

if (url.indexOf(mep) != -1) {
    let obj = JSON.parse(body);
    obj.expirationDate = "2021-05-17T09:53:34";
    obj.type = 2;
    body = JSON.stringify(obj);  
}

if (url.search('/learningpath/api/v2/units/[0-9]+/activities/[0-9_]+') != -1) {
    let obj = JSON.parse(body);
    obj.active = true;
    obj.blockedBy = [];
    body = JSON.stringify(obj);  
    console.log(body);
} 
if (url.indexOf(unit) != -1) {
    let obj = JSON.parse(body);
    obj.activities.forEach((book, index)=> {
        book.active = true;
        book.blockedBy = [];
      });
    body = JSON.stringify(obj);  
}


$done({body});
