var express = require('./express.js'),
    colors = require('colors/safe'),
    http = require('http'),
    portfinder = require('portfinder');

portfinder.basePort = require('./env.js')('port');


function start (cb) {

  express.appPromise().then(function (app) {

    var server = http.createServer(app);

    portfinder.getPort(function (err, port) {

      server.listen(port, '0.0.0.0', function () {
          console.info(colors.yellow('http')+' listening on port %s', port);
          cb && cb(port);
      });

    });

  });

}


module.exports.start = start;

if(!module.parent) {
    start();
}
