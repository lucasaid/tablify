module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('')
            .pipe(plugins.prompt.prompt({
                name: 'port',
                message: 'Which livereload port do you wish to host on?',
                default: params.livePort,
            }, function(livePortTemp) {
                params.livePort = livePortTemp.port;
            }));
    };
};
