var body = $response.body;

let obj = JSON.parse(body);

obj.activities.forEach((book, index)=> {
    book.active = true;
  });
body = JSON.stringify(obj);  

$done({body});
