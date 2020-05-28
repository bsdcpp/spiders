var body = $response.body;

let obj = JSON.parse(body);

$done({body});
