module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compressing javascript.'));

        gulp.src([params.sourcePath+'/js/vendor/*'])
        .pipe(gulp.dest(params.buildPath+'/js/vendor'));

        gulp.src([params.sourcePath+'/js/*.js'])
            .pipe(plugins.uglify())
            .pipe(plugins.rename({ suffix: '.min' }))
            .pipe(gulp.dest(params.buildPath+'/js'))
            .pipe(plugins.connect.reload());
        gulp.src([params.sourcePath+'/js/*.js'])
            .pipe(gulp.dest(params.buildPath+'/js'))
            .pipe(plugins.connect.reload());
    };
};
