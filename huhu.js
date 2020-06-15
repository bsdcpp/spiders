var body = $response.body;
var url = $request.url;

if (url.search("cateStoryList\.html") != -1) {
        let obj = JSON.parse(body);
        obj.msg.story.forEach((item, index)=> {
            item.vip = 0;
            item.islogin = 0;
        });
        body = JSON.stringify(obj);
}

if (url.search("getVipDate\.html") != -1) {
        let obj = JSON.parse(body);
    obj.vip_start_date = "2020-01-01";
    obj.vip_end_date = "2040-01-01";
        body = JSON.stringify(obj);
}
$done({body});
