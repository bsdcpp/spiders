var body = $response.body;
var url = $request.url;

if (url.indexOf("getCollectItems.json") != -1) {
    let obj = JSON.parse(body);
    obj.data.items.forEach((item, index)=> {
        item.extFlag = 290;
      });
    body = JSON.stringify(obj);
}

$done({body});
