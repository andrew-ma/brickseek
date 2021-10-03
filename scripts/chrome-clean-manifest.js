/* Node Script to clean the manifest.json file
because Chrome does not support the "browser_specific_settings" key
*/
const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
	fs.mkdirSync(dest, {recursive: true});
	const entries = fs.readdirSync(src, {withFileTypes: true});

	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);

		if (entry.isDirectory()) {
			copyDirSync(srcPath, destPath);
		} else {
			fs.copyFileSync(srcPath, destPath);
		}
	}
}

function main() {
	const firefox_distribution_dir = 'distribution';
	// // If chrome_distribution folder does not exist, create it
	const chrome_distribution_dir = 'chrome_distribution';
	if (!fs.existsSync(chrome_distribution_dir)) {
		fs.mkdirSync(chrome_distribution_dir);
	}

	// Copy all files firefox distribution dir to chrome distribution dir
	copyDirSync(firefox_distribution_dir, chrome_distribution_dir);

	// Read the manifest.json file in the chrome distribution dir, and parse the JSON
	const chrome_manifest_filename = path.join(chrome_distribution_dir, 'manifest.json');
	const file_content = fs.readFileSync(chrome_manifest_filename);
	const json_object = JSON.parse(file_content);

	// Remove the keys that cause error for Chrome
	delete json_object.browser_specific_settings;
	const cleaned_json_string = JSON.stringify(json_object);

	// Write the cleaned up manifest.json back to the file
	fs.writeFileSync(chrome_manifest_filename, cleaned_json_string);
	console.info(`\nFinished writing ${chrome_manifest_filename}`);
}

main();

