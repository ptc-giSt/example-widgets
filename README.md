## Basic HTML Widgets Extension ##
This extension provides the basic HTML widgets (input, labels, grids, panels, etc.) that can be added to ThingWorx Studio.

## Installation ##
To include this extension in Studio, add the following to your package.json:

    "dependencies": {
      ...
      "ves-basic-web-widgets-extension": "^1.0.0"
    },
    "studioExtensions": {
      ...
      "ves-basic-web-widgets-extension": "^1.0.0"
    }


## Updating the copyrights:

The following command was used to insert the copyright text.

```
git clean -xfd
node ~/src/thing/copyrightUtil/src/main.js 'runtime/js/!(Chart.min).js' 'widgets/**/*.js' 'ide/**/*.js'
```
