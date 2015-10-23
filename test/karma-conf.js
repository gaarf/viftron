module.exports = function(config){
  var karma = {

    basePath : '../',

    files : [
      { pattern: 'bower_components/webcomponentsjs/webcomponents-lite.js', watched: false },
      'test/loader.js',
      'test/unit/**/*.js',
      { pattern: 'bower_components/**/*', watched: false, included: false, served: true, nocache: true },
      { pattern: 'app/elements/**/*.html', watched: true, included: false, served: true },
      { pattern: 'app/elements/**/*.js', watched: true, included: false, served: true }
    ],

    proxies: {
      '/bower_components/': '/base/bower_components/'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    customLaunchers: {
      Chrome_jenkins_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    reporters: ['progress']

  };

  if(process.env.JENKINS_HOME){
    karma.browsers = ['Chrome_jenkins_ci'];
  }

  config.set(karma);
};
