# Development

## Node and NPM versions
- node: v14.17.5
- npm: 6.14.14

## Install from Source Code
Change into folder with package.json, then
```
npm install
```

## Build extension
Code from _`source`_ directory will be built to _`distribution`_ directory
```
npm run clean
npm run build
```

_`distribution`_ directory can be zipped, and uploaded as browser extension


## Run Lint checks
Linting single CSS file
```
npx stylelint source/brickseek.css
```

Automatically fixing single CSS file
```
npx stylelint source/brickseek.css --fix
```

Linting JS files
```
npx xo
```

Automatically fixing JS files
```
npx xo --fix
```

Specific lint checks can be disabled by setting options for "xo":  and "stylelint": in _`package.json`_


## Developing extension on local computer

### Firefox
- Build and watch for any changes to files in _`source`_ folder, and the built files are in _`distribution`_ folder

        npm run clean
        npm run watch
- Go to <a href="about:debugging#/runtime/this-firefox">about:debugging#/runtime/this-firefox</a>
- Click on the "Load Temporary Add-on..." button
- Select the "manifest.json" file in the _`distribution`_ folder, and not the one in the project root
- The extension should work normally
- After making changes to files in _`source`_ folder while in `watch` mode, press the "Reload" button in about:debugging to reload the extension


### Chrome
- Build and watch for any changes to files in _`source`_ folder, and the built files are in _`distribution`_ folder

        npm run clean
        npm run watch
- Go to <a href="chrome://extensions/">chrome://extensions/</a>
- Switch "Developer mode" to be ON
- Click the "Load unpackaged" button, and select the _`distribution`_ folder
- The extension should work normally
- After making changes to files in _`source`_ folder while in `watch` mode, go to chrome://extensions, and press the "Reload" icon in this extension's card


## Final extension build for upload to Firefox/Chrome stores

### Firefox
```
npm run clean
npm run build
```

Built extension will be the _`distribution`_ folder, so just ZIP it up

### Chrome
```
npm run clean
npm run build_chrome
```

Built extension will be the _`chrome_distribution`_ folder, so just ZIP it up