var body = $response.body;

let obj = JSON.parse(body);

obj.activities.forEach((book, index)=> {
    book.active = true;
    book.blockedBy = null;
  });
body = JSON.stringify(obj);  

$done({body});
