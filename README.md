# client-dev-boilerplate
Boilerplate project setup with PIXI, Typescript and GSAP. For use with code challenges for potential new employees. 

## Build Prerequisite 
You will need Node.js installed. Latest version recommended. 

Do `npm install` to install all required dependencies. 

## Build and Watch
To build run `npm run build`. Compiles typescript files and bundles them. 

To watch run `npm run watch`. Script runs in background to automatically build when files change.  

## Running app
You have multiple options but it you will need to run the app from a web-server of some kind. Otherwise you will get cross-origin issues.  

At NLC we primarily use [WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.html?&gclid=CJqNurbKvNMCFTIo0wodqd8HZQ&gclsrc=aw.ds.ds&dclid=CP-137bKvNMCFbID0wodyvwDsg
) and with the Run/Debug configurations you can easily setup a "JavaScript Debug" configuration to run the bin/index.html file in a browser. WebStorm will then start a web server for you.  

WebStorm also has tools for cloning git repositories and console for running npm scripts.  

## Improve code watching performance in WebStorm 
**Disable** `Use "safe write"` in `Settings-> Appearance & Behavior-> System Settings`