# angular-2.0-Setup

##Projectsetup width node.js

Define a folder for your project-setup. Change into folder and create a package.json by:

```
npm init
```
Follow the Instructions on screen an as a result you have a package,json similar to this: 

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
We need the following modules:
* concurrently
* lite-server
* typescript
* typings

```
npm install [modulname] --save-dev
```
