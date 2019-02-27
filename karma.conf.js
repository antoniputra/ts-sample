const webpackConfig = require("./webpack.config");
const path = require('path');

delete webpackConfig.entry

module.exports = (config) => {
  config.set({
    // browsers: ["Chrome"],
    browsers: ["ChromeHeadless"],
    frameworks: ["mocha", "chai", "sinon"],
    reporters: ["spec", 'coverage-istanbul'],
    files: [
      "src/tests/index.ts"
    ],
    preprocessors: {
      "src/tests/index.ts": ["webpack"],
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'none'
    },
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    },
    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        // ui: 'tdd'
      }
    }
  })
};
