module.exports = function (gulp, plugins) {
    return function () {
        plugins.watch([params.sourcePath+'/**/*.*'], function() {
            gulp.start('compile:sass');
            gulp.start('compile:jade');
            gulp.start('compile:javascript');
        });
    };
};
