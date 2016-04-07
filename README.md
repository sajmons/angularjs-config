# nv-oauth2-client
AngularJS configuration module for bringing server side configurations to AngularJS client application


## Install

```
npm install angularjs-config
```

## Usage

config.json
```js
{
       "jsonEndpoint": "angular-config",               // endpoint for GET that returns only JSON
       "angularModuleEndpoint": "/angular-config.js",  // edpoint suitable for use in HTML <script> tag
       "angularModuleName": "angularConfig",           // name of the AngularJS module
       "angularModuleInjection": "Config"              // name of AngularJS module injection
       "config": {                                     // JSON config to be exposed by AngularJS constant module
           "customSetting1": 1,
           "customSetting2": "foo",
           "customSetting3": {
               "foo": "bar"
           }
       }
}
```

server.js
```js
var angularConfig = require('angularjs-config');
var config = require('config.json');

angularConfig.initialize(app, config);
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script src="/angularjs-config.js"></script>
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
```

## License

SIC � [Nova Vizija d.d.](http://www.nova.vizija.si)