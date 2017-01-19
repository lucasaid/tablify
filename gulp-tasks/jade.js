module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compiling Jade files.'));
        gulp.src(params.sourcePath+'/*.jade')
            .pipe(plugins.jade({
                pretty: true
            }))
            .pipe(gulp.dest(params.buildPath))
            .pipe(plugins.connect.reload());
    };
};
