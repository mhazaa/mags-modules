module.exports = async (url, options = {}, data = null) => {
  options.headers = { 'Content-Type': 'application/json' };
	if (data) options.body = JSON.stringify(data);
	const response = await fetch(url, options);
	return await response.json();
};
