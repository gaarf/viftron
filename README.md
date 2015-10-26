VifTron
==========

_an OnVif client built with Electron_

### Installation

Global dependencies:

* `npm install -g bower gulp electron-packager`

Local dependencies:

* `npm install && bower install`

### Running in electron-prebuilt

* `gulp build`
* `npm start`

### Developement in a browser

* `gulp develop` (autobuild, autorestart)

### Packaging the app

* `gulp distribute`
* `electron-packager ./ VifTron --platform=darwin --arch=all --prune --version=0.34.1 --out=./target --ignore="^/app" --ignore="^/test" --ignore="^/this\.sublime" --ignore="^/target" --overwrite --asar --app-version=0.0.1`

will generate `target/VifTron-darwin-x64/VifTron.app`
