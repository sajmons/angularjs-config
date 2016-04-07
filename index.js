const util = require('util');

/**
 * Generate JavaScript code for AngularJS constant module and expose it through GET endpoint suitable for including in HTML code.
 * Config format:
 * 
 * {
 *      "jsonEndpoint": "angular-config",               // endpoint for GET that returns only JSON
 *      "angularModuleEndpoint": "/angular-config.js",  // edpoint suitable for use in HTML <script> tag
 *      "angularModuleName": "angularConfig",           // name of the AngularJS module
 *      "angularModuleInjection": "Config"              // name of AngularJS module injection
 *      "config": {                                     // JSON config to be exposed by AngularJS constant module
 *          "customSetting1": 1,
 *          "customSetting2": "foo",
 *          "customSetting3": {
 *              "foo": "bar"
 *          }
 *      }
 * }
 * 
 * @param app current application
 * @param config JSON config to be exposed by AngularJS constant module
 */
exports.initialize = function(app, config) {

    app.get(config.jsonEndpoint || 'angular-config', function(req, res, next) {
        res.json(config.config);
    });

    app.get(config.angularModuleEndpoint || '/angular-config.js', function(req, res, next) {

        var js = 'angular.module("%s", []).constant("%s", %s);';

        js = util.format(js,
            config.angularModuleName || "angularConfig",
            config.angularModuleInjection || "Config",
            JSON.stringify(config.config));

        res.type('text/javascript');
        res.end(js);
    });

}