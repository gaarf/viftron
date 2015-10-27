var electron = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// require('crash-reporter').start();


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;


electron.on('ready', function() {

  require('./server').start(function (port) {

      // Create the browser window.
      mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        resizable: false,
        fullscreen: false
      });

      // and load the index.html of the app.
      mainWindow.loadUrl('http://0.0.0.0:'+port+'/');

      // Open the DevTools.
      mainWindow.openDevTools();

      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;

        electron.quit();
      });

  })
});

