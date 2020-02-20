process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../../coverage/legendary-dollop'),
            reports: ['lcovonly'],
            thresholds: {
                statements: 80,
                lines: 80,
                branches: 80,
                functions: 80
            },
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        restartOnFileChange: true,
        // browsers: ['Chrome'],
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000,
        flags: [
            '--disable-web-security',
            '--disable-gpu',
            '--no-sandbox'
        ]
    });
};