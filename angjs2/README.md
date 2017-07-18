# Angular (2) Project Starter #
### By Spire Digital ###

## Dependencies ##

```
#!bash

Node (v6.x.x+) and NPM (3.x.x+)
```


## Quick Start ##


```
#!bash
# clone the repository
git clone git@bitbucket.org:spiremedia/angular-starter.git my-app

# install dependencies
npm install

# start server
npm start

# go to http://localhost:8080 in your browser.
```

## Available commands ##

* `npm run build` - Clears out the `dist` folder and rebuilds it
* `npm run start` - Starts the web server and listens for changes
* `npm run start:hmr` - Starts the web server and listens for changes using Hot Module Replacement (HMR)
* `npm run lint` - Runs [Codelyzer](https://github.com/mgechev/codelyzer) to lint TypeScript & Angular code
* `npm run clean` - Cleans out `node_modules`, `dist`, and npm cache
* `npm run clean-install` - Runs `npm run clean`, and then re-installs npm modules
* `npm run clean-start` - Runs `npm run clean-install`, and then starts the server and watch process

**Note:** This starter uses TypeScript. It is recommended to use a [TypeScript compatible text editor/IDE](https://www.typescriptlang.org/).

Based on [angular-webpack](https://github.com/preboot/angular-webpack).