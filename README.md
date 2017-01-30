# angular-2.0-Setup

##Projectsetup width node.js

System-Requirements: Windows(testet under), npm V3.10.10,  node V6.9.4. 
Test under OSX Sierra 10.12.2 with npm V4.0.5,  node V7.4.0 failed!
See here: [https://github.com/npm/npm/issues/15590](https://github.com/npm/npm/issues/15590)

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
npm install -g [modulname] --save-dev
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
## Add angular-module to project
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
## TypeScript configuration
It is necessary to reference TypeScript to Compiler. Therfore we expand the "scripts" -Area in our package.json
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc"
  },
```
thats all. Now we can test it with.
```
npm run tsc
```
Youre output must similar to:
```
Version 2.1.5
Syntax:   tsc [options] [file ...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt

Options:
 --allowJs                           Allow javascript files to be compiled.
 --allowSyntheticDefaultImports      Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
 --allowUnreachableCode              Do not report errors on unreachable code.
 --allowUnusedLabels                 Do not report errors on unused labels.
 --alwaysStrict                      Parse in strict mode and emit "use strict" for each source file
 --baseUrl                           Base directory to resolve non-absolute module names.
 -d, --declaration                   Generates corresponding '.d.ts' file.
 --experimentalDecorators            Enables experimental support for ES7 decorators.
 --forceConsistentCasingInFileNames  Disallow inconsistently-cased references to the same file.
 -h, --help                          Print this message.
 --importHelpers                     Import emit helpers from 'tslib'.
 --init                              Initializes a TypeScript project and creates a tsconfig.json file.
 --jsx KIND                          Specify JSX code generation: 'preserve' or 'react'
 --jsxFactory                        Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'.
 --lib                               Specify library files to be included in the compilation:
                                       'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string'
 --mapRoot LOCATION                  Specify the location where debugger should locate map files instead of generated locations.
 --maxNodeModuleJsDepth              The maximum dependency depth to search under node_modules and load JavaScript files
 -m KIND, --module KIND              Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
 --moduleResolution STRATEGY         Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
 --newLine NEWLINE                   Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
 --noEmit                            Do not emit outputs.
 --noEmitOnError                     Do not emit outputs if any errors were reported.
 --noFallthroughCasesInSwitch        Report errors for fallthrough cases in switch statement.
 --noImplicitAny                     Raise error on expressions and declarations with an implied 'any' type.
 --noImplicitReturns                 Report error when not all code paths in function return a value.
 --noImplicitThis                    Raise error on 'this' expressions with an implied 'any' type.
 --noImplicitUseStrict               Do not emit 'use strict' directives in module output.
 --noUnusedLocals                    Report errors on unused locals.
 --noUnusedParameters                Report errors on unused parameters.
 --outDir DIRECTORY                  Redirect output structure to the directory.
 --outFile FILE                      Concatenate and emit output to single file.
 --preserveConstEnums                Do not erase const enum declarations in generated code.
 --pretty                            Stylize errors and messages using color and context. (experimental)
 -p DIRECTORY, --project DIRECTORY   Compile the project in the given directory.
 --reactNamespace                    Specify the object invoked for createElement and __spread when targeting 'react' JSX emit
 --removeComments                    Do not emit comments to output.
 --rootDir LOCATION                  Specify the root directory of input files. Use to control the output directory structure with --outDir.
 --skipLibCheck                      Skip type checking of declaration files.
 --sourceMap                         Generates corresponding '.map' file.
 --sourceRoot LOCATION               Specify the location where debugger should locate TypeScript files instead of source locations.
 --strictNullChecks                  Enable strict null checks.
 --suppressImplicitAnyIndexErrors    Suppress noImplicitAny errors for indexing objects lacking index signatures.
 -t VERSION, --target VERSION        Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
 --traceResolution                   Enable tracing of the name resolution process.
 --types                             Type declaration files to be included in compilation.
 -v, --version                       Print the compiler's version.
 -w, --watch                         Watch input files.
 @<file>                             Insert command line options and files from a file.
```
Now create a tsconfig.json (Compiler-Options) with:
```
npm run tsc -- init
```
tsconfig.json:
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false
    }
}
```

expand/change it to:
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false
    },
    "exclude": [
        "node_modules"
    ]
}

```
## Install Typdefinitions
Expand the package.json in "scripts" with:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc",
    "typings": "typings"
  },
```
and call in console:
```
npm run typings -- init
```
This create a file named typings.json
```
{
  "name": "app",
  "dependencies": {}
}
```
import Typedefinition:
```
npm run typings -- install dt~node --save --global
npm run typings -- install dt~core-js --save --global

```
and configure package.json in "scripts" area:
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "typings install",
    "tsc": "tsc",
    "typings": "typings"
  },
```
## Configuration system.js
create a file named system.config.js next to package.json with the following configuration:
```
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app : 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
```
## Bind system.js in project-setup
create index.html next to package.json with following content:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>selfSetup</title>
    <meta name="vieport" content="width=device-width; initial-scale=1.0">

    <!-- polyfills -->
    <script src="node_modules/core-js/client/shim.min.js"></script>

    <!-- vendors -->
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>

    <script>
        System.import ('system.config.js').then (function(){
            System.import ('app');
        }).catch (function(err){
            console.error(err)
        })
    </script>

</head>
<body>

</body>
</html>
```
create main.ts in new folder app/
```
console.log('Hello World');
```

modify package.json for compiling *.ts to *.js, add a watcher and the lite-server
```
  "scripts": {
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "typings install",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings",
    "lite": "lite-server"
  },
```

And now call:
```
npm run start
```

ready, have fun with angular 2.0
