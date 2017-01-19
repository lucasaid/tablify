module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compiling sass.'));
        gulp.src(params.sourcePath+'/scss/*.scss')
            .pipe(plugins.sass({
                outputStyle: 'compressed'
            }))
            .pipe(plugins.autoprefixer())
            .pipe(plugins.rename({ suffix: '.min' }))
            .pipe(gulp.dest(params.buildPath+'/css'))
            .pipe(plugins.connect.reload());

        gulp.src(params.sourcePath+'/scss/*.scss')
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer())
            .pipe(gulp.dest(params.buildPath+'/css'))
            .pipe(plugins.connect.reload());
    };
};
