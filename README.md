# parse-json

[Use config for vscode](https://github.com/olivierlama/vscode-config)

## Objectives

The **final** goal is to write a parser in basic language (Sage X3 language)
This will be done in **several steps**.

- Step 1 : in javascript
- Step Final : in Sage basic

### Step 1

Thanks to **Phil Eaton**.
I can use the code in Python to translate in javascript.

[python: https://github.com/eatonphil/pj ](https://github.com/eatonphil/pj)

## To install

```sh
$ git clone https://github.com/olivierlama/parse-json-js.git
$ cd parse-json-js
$ npm i

```

## To execute Dev server

```sh
$ npm start

parse-json@1.0.0 start
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.22:4000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::d89f:ec1c:f3cd:72d5]:4000/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\olivier\DATAS_DEV\Github\parse-json-js\dist' directory
<i> [webpack-dev-middleware] wait until bundle finished: /
asset main.bundle.js 227 KiB [emitted] (name: main) 1 related asset
asset index.html 324 bytes [emitted]
runtime modules 27.3 KiB 12 modules
modules by path ./node_modules/ 162 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 57.4 KiB 12 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB
    ./node_modules/webpack/hot/dev-server.js 1.59 KiB [built] [code generated]
    + 3 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB
    ./node_modules/html-entities/lib/index.js 7.74 KiB [built] [code generated]
    ./node_modules/html-entities/lib/named-references.js 72.7 KiB [built] [code generated]
    + 2 modules
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
modules by path ./src/ 6.25 KiB
  ./src/index.js 3.4 KiB [built] [code generated]
  ./src/in/in.json 2.85 KiB [built] [code generated]
webpack 5.74.0 compiled successfully in 3310 ms

```

Open [http://localhost:4000/](http://localhost:4000/)
