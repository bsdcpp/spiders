var url = $request.url;

if (url.search('(/learningpath/api/v2/units/[0-9]+/activities/[0-9_]+)') != -1) {
    $request.url = "http://192.168.2.248:555/abaEnglish" + RegExp.$1;
    url = $request.url;
    console.log(url)
} 

$done({});
