# angular-2.0-Setup

##Projectsetup width node.js

Define a folder for your project-setup. Change into folder and create a package.json by:

```
npm init
```
Follow the Instructions on screen 

```
name: yourAppName
version 0.0.1
description: Angular 2.0 Setup on basis of node and systemjs
entry point: /* you can leave blank */
test command: /* you can leave blank */
git repository: https://github.com/yourename/youre-repository.git 
keywords: Angular 2.0 Setup
author: Youre Name
license: /* you can leave blank */


```
.. and as a result you have a package,json similar to this: 

```
{
  "name": "app",
  "version": "0.0.1",
  "description": "Angular 2.0 Setup auf Basis von node und systemjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Angular",
    "2.0",
    "Setup"
  ],
  "author": "Sandro Birke",
  "license": "ISC"
}
```
## Add node-module to project
We need the following modules (necessary):
* concurrently
* lite-server
* typescript
* typings

```
npm install [modulname] --save-dev
```
package.json now extend to:
```
...
"devDependencies": {
    "concurrently": "^3.1.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.1.5",
    "typings": "^2.1.0"
  },
...
```
... and some vendors and polyfills:
* core-js
* reflect-metadata
* rxjs
* systemjs
* zone.js
```
npm install [modulname] --save
```
package.json now extend to:
```
...
  "dependencies": {
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.9",
    "rxjs": "^5.0.3",
    "systemjs": "^0.20.1",
    "zone.js": "^0.7.6"
  }
...
```
install angular module:
* core
* common
* compiler
* platform-browser
* platform-browser-dynamic
* http
* router
```
npm install @angular/[modulname] --save
```
dependencies area in package.json is now grow up to:
```
  "dependencies": {
    "@angular/common": "^2.4.5",
    "@angular/compiler": "^2.4.5",
    "@angular/core": "^2.4.5",
    "@angular/http": "^2.4.5",
    "@angular/platform-browser": "^2.4.5",
    "@angular/platform-browser-dynamic": "^2.4.5",
    "@angular/router": "^3.4.5",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.9",
    "rxjs": "^5.0.3",
    "systemjs": "^0.20.1",
    "zone.js": "^0.7.6"
  }
```
