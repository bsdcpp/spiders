var body = $response.body;
var url = $request.url;

if (url.indexOf("getCollectItems.json") != -1) {
    let obj = JSON.parse(body);
    obj.data.items.forEach((item, index)=> {
        item.extFlag = 290;
      });
    body = JSON.stringify(obj);
}

if (url.indexOf("getUserDetail.json") != -1) {
    let obj = JSON.parse(body);
    obj.data.vipInfo.level = 99;
    obj.data.vipInfo.status = 1;
    obj.data.vipInfo.vipType = 1;
    obj.data.vipInfo.payFlag = 1;
    obj.data.vipInfo.endTime = 1646879999000;
    obj.data.vipInfo.withholdingTime = 1647879999000;
    obj.data.vipInfo.remainingDays = 300;

    
    obj.data.vipInfoV2.level = 99;
    obj.data.vipInfoV2.status = 1;
    obj.data.vipInfoV2.vipType = 1;
    obj.data.vipInfoV2.payFlag = 1;
    obj.data.vipInfoV2.endTime = 1646879999000;
    obj.data.vipInfoV2.withholdingTime = 1647879999000;
    obj.data.vipInfoV2.remainingDays = 300;
    
    body = JSON.stringify(obj);
}

$done({body});
