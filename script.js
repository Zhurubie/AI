let url = $request.url;
let newUrl = url.replace(/([^.]+)\.googlevideo\.com/, "$1.gvt1.com");
$done({ url: newUrl });
