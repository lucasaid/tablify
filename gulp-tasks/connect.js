module.exports = function (gulp, plugins) {
    return function () {
        plugins.connect.server({
            root: params.buildPath,
            livereload: {
                port: params.livePort,
            },
            port: params.port,
        });
    };
};
