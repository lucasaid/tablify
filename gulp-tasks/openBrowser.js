var getBrowser = function() {
    var browser = false;

    // Detect OS
    os = require('os');

    if (params.defaultBrowser !== 'chrome' && params.defaultBrowser !== 'firefox' && params.defaultBrowser !== 'safari' && params.defaultBrowser !== 'ie') {
        plugins.util.log(plugins.util.colors.red("ERROR: ") + "The browser you have specified in your config is not valid! DEFAULT_BROWSER: " + params.defaultBrowser);
        plugins.util.beep();
        process.exit(1);
    }
    if (os.platform() === 'linux') {
        if (params.defaultBrowser === 'chrome') {
            browser = "google-chrome";
        } else if (params.defaultBrowser !== 'ie') {
            browser = params.defaultBrowser;
        }
    } else if (os.platform() === 'darwin') {
        if (params.defaultBrowser === 'chrome') {
            browser = "Google Chrome";
        } else if (params.defaultBrowser !== 'ie') {
            browser = params.defaultBrowser;
        }
    } else if (os.platform() === 'win32') {
        browser = params.defaultBrowser;
    }
    if (browser === false) {
        plugins.util.log(plugins.util.colors.red("ERROR: ") + "The browser you have specified in your config is not valid. DEFAULT_BROWSER: " + params.defaultBrowser);
        plugins.util.beep();
        process.exit(1);
    }
    return browser;
};
module.exports = function (gulp, plugins) {
    return function () {
        var browser = getBrowser();
        var options = {
            uri: 'http://localhost:' + params.port,
            app: browser
        };
        gulp.src(__filename)
            .pipe(plugins.wait(500))
            .pipe(plugins.open(options));
    };
};
