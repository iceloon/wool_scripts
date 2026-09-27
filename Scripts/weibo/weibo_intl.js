var body = $response.body;

try {
	var data = JSON.parse(body);
	if (data.data && Object.prototype.hasOwnProperty.call(data.data, 'banner')) {
		delete data.data.banner;
	}
	$done({ body: JSON.stringify(data) });
} catch (error) {
	console.log('weibo_intl: ' + error);
	$done({});
}
