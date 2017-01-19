module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('')
            .pipe(plugins.prompt.prompt({
                name: 'port',
                message: 'Which port do you wish to host on?',
                default: params.port,
            }, function(portTemp) {
                params.port = portTemp.port;
            }));
    };
};
