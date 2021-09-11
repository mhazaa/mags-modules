module.exports = (method, url, data = null) => {
	return new Promise(resolve => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) resolve(JSON.parse(xhr.responseText));
		};
		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		if (data) data = JSON.stringify(data);
		xhr.send(data);
	});
};
