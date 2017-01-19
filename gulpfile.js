var gulp = require('gulp');
var plugins = require( 'gulp-load-plugins' )();
var op = require('openport');

GLOBAL.params = {
    buildPath: 'build',
    sourcePath: 'source',
    port: 8080,
    livePort: 35729,
    defaultBrowser: 'chrome'
};

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, params);
}


gulp.task('compile:javascript', getTask('javascript'));
gulp.task('compile:sass', getTask('sass'));
gulp.task('compile:jade', getTask('jade'));

gulp.task('getLivePort', ['getPort'], getTask('getLivePort'));

gulp.task('getPort', getTask('getPort'));

gulp.task('watch',['getPort', 'getLivePort', 'init', 'connect'], getTask('watch'));

gulp.task('openBrowser', ['getPort', 'getLivePort', 'init', 'connect', 'watch'], getTask('openBrowser'));

gulp.task('connect',['getPort', 'getLivePort'], getTask('connect'));


gulp.task('init',['getPort', 'getLivePort'], function(){
    gulp.start('compile:sass');
    gulp.start('compile:jade');
    gulp.start('compile:javascript');
});

gulp.task('run', function(){
  op.find({
          startingPort: params.port,
          endingPort: 9000
      },
      function(err, port) {
          if (err) {
              console.log(err);
              return;
          }
          params.port = port;
          gulp.start('run:init')
      }
  );
});

gulp.task('run:init', [
    'getPort',
    'getLivePort',
    'init',
    'connect',
    'watch',
    'openBrowser'
]);

gulp.task('build', [
    'init'
]);


/*
  Display Help
*/
gulp.task('help', getTask('help'));
