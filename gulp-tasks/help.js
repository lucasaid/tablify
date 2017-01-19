module.exports = function (gulp, plugins) {
    return function () {
        console.log();
        console.log(plugins.util.colors.cyan("BASE NPM/GULP TEMPLATE"));
        console.log();
        console.log(plugins.util.colors.green("   Usage: gulp { command }"));
        console.log();
        console.log(plugins.util.colors.green("   help:    ") + "Displays this help text.");
        console.log(plugins.util.colors.green("   build:   ") + "Compiles files.");
        console.log(plugins.util.colors.green("   run:     ") + "Sets up a local server, watches and compiles files.");
        console.log();
    };
};
