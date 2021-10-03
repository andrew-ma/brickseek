function addOpenInBrickseekButton(brickseekURL) {
	const button = document.createElement('button');
	button.id = 'open-in-brickseek-button';
	button.addEventListener('click', () => {
		// Open video download url in new tab
		window.open(brickseekURL, '_blank');
	});

	const button_text = document.createTextNode('Open in Brickseek');

	button.append(button_text);
	document.body.insertBefore(button, document.body.firstChild);
}

function getBrickseekWalmartProductURL() {
	const url = location.href;

	const walmartProductSKUPattern = /([^:]+):\/\/([^/]+)\/([^/]+)\/([^/]+)\/([^?]+)/;

	const matches = url.match(walmartProductSKUPattern);

	if (matches === null) {
		console.error('Current page is not a valid Walmart Product Page');
		return null;
	}

	const productSKU = matches[5];

	const brickseekURL = `https://brickseek.com/walmart-inventory-checker/?sku=${productSKU}`;
	return brickseekURL;
}

const brickseekURL = getBrickseekWalmartProductURL();
if (brickseekURL !== null) {
	console.log(brickseekURL);

	addOpenInBrickseekButton(brickseekURL);
}
