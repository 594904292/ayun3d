# React Redux Starter Kit

[![Join the chat at https://gitter.im/davezuko/react-redux-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davezuko/react-redux-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This starter kit is designed to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS modules with Sass support, unit testing, code coverage reports, bundle splitting, and a whole lot more.

这个启动包的设计是为了让你使用一整天最新最棒的前端技术，所有都是可配置，富特性的，基于webpack已经提供代码热加载，css模块伴随 对Sass的支持，单元测试，代码覆盖率报告，代码分割等等更多。

The primary goal of this project is to remain as **unopinionated** as possible. Its purpose is not to dictate your project structure or to demonstrate a complete sample application, but to provide a set of tools intended to make front-end development robust, easy, and, most importantly, fun. Check out the full feature list below!

这个项目最主要的目的是尽可能果断的保留。目的不是要你一定按照这个结构去完成你的项目，皆在使前端开发更健壮，更简单还有最重要的是更快乐。你可以获得以下的所有特性！

Finally, This project wouldn't be possible without the help of our many contributors, so [thank you](#thank-you) for all of your help.

最后，如果没有大家的贡献，这个项目是不可能如此健壮的，所以，谢谢大家。

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Build System](#build-system)
  1. [Configuration](#configuration)
  1. [Root Resolve](#root-resolve)
  1. [Globals](#globals)
  1. [Styles](#styles)
  1. [Server](#server)
  1. [Production Optimization](#production-optimization)
1. [Learning Resources](#learning-resources)
1. [FAQ](#troubleshooting)
1. [Thank You](#thank-you)

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## Requirements
* node `^4.2.0`
* npm `^3.0.0`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-redux-starter-kit` in one of two ways:

### Install from source

First, clone or download:

```bash
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
// or
$ wget -O react-redux-starter-kit.zip https://github.com/davezuko/react-redux-starter-kit/archive/master.zip
$ unzip react-redux-starter-kit.zip
```

Then, rename to your project name and change into the directory:

```bash
$ mv react-redux-starter-kit <my-project-name>
$ cd <my-project-name>
```

### Alternatively, install via `redux-cli`

If not already installed (globally):

```bash
$ npm i redux-cli -g
```

Then, create a new project:

```bash
$ redux new <my-project-name>
$ cd <my-project-name>
```

### Install dependencies, and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```
If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.代码热替换开启|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

这个项目的结构使用的是 fractal(不规则碎片形：适合大型项目)*，方法的分组主要是依照特性而不是文件类型。注意，这个目录结构只是一个指引，并不一定要按这个来。这种结构谐在让程序更容易扩展，想了解更多请点击这里。

```
.
├── bin                      # Build/Start scripts 启动脚本
├── blueprints               # Blueprint files for redux-cli redux-cli的蓝图
├── build                    # All build-related configuration 所有打包配置项
│   └── webpack              # Environment-specific configuration files for webpack webpack的指定环境配置文件
├── config                   # Project configuration settings 项目配置文件
├── server                   # Koa application (uses webpack middleware) Koa 程序 (使用 webpack 中间件)
│   └── main.js              # Server application entry point 服务端程序入口文件
├── src                      # Application source code 程序源文件
│   ├── index.html           # Main HTML page container for app  项目主容器页
│   ├── main.js              # Application bootstrap and rendering 程序启动和渲染
│   ├── components           # Reusable Presentational Components 可复用的展示组件(从props获取数据)
│   ├── containers           # Reusable Container Components 可复用的容器组件(从Redux 获取state)
│   ├── layouts              # Components that dictate major page structure 指示主页结构组件
│   ├── redux                # "Ducks" location...
│   │   └── modules          # reducer, action, creators not part of a route
│   ├── routes               # Main route definitions and async split points  主路由和异步分割点
│   │   ├── index.js         # Bootstrap main application routes with store 用store启动主程序路由
│   │   └── Home             # Fractal route  不规则路由
│   │       ├── index.js     # Route definitions and async split points 路由定义和代码异步分割
│   │       ├── assets       # Assets required to render components 组件引入的静态资源
│   │       ├── components   # Presentational React Components 展示React组件
│   │       ├── container    # Connect components to actions and store 连接actions和store组件
│   │       ├── modules      # Collections of reducers/constants/actions reducers/constants/actions的集合
│   │       └── routes **    # Fractal sub-routes (** optional) 不规则子路由(** 可选择的)
│   ├── static               # Static assets (not imported anywhere in source code)静态文件(不要到处imported源文件)
│   ├── store                # Redux-specific pieces Redux指定块
│   │   ├── createStore.js   # Create and instrument redux store 创建和使用redux store
│   │   └── reducers.js      # Reducer registry and injection -- Reducer注册和注入
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

However, adding the DevTools components to your project is simple. First, grab the packages from npm:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

#### `redux-cli`

```bash
npm install redux-cli --save-dev
```

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. If you are using `redux-cli`, test files should automatically be generated when you create a component or redux module.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful. The Koa server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

### Heroku

Heroku has `nodejs buildpack` script that does the following when you deploy your app to Heroku.
1. Find `packages.json` in the root directory.
2. Install `nodejs` and `npm` packages.
3. Run `npm postinstall script`
4. Run `npm start`

Therefore, you need to modify `package.json` before deploying to Heroku. Make the following changes in the `scripts` section of `package.json`.

```
...
"start": "better-npm-run start:prod",
"serve": "better-npm-run start",
"postinstall": "npm run deploy:prod",
"betterScripts": {
  ...
  "start:prod": {
    "command": "babel-node bin/server",
    "env": {
      "NODE_ENV": "production"
    }
  }
  ...
},
```

It's also important to tell Heroku to install all `devDependencies` to successfully compile your app on Heroku's environment. Run the following in your terminal.

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

With this setup, you will install all the necessray packages, build your app, and start the webserver (e.g. koa) everytime you push your app to Heroku. Try to deploy to Heroku by running the following commands.

```bash
$ git add .
$ git commit -m 'My awesome commit'
$ git push heroku master
```

If you fail to deploy for an unknown reason, try [this helpful comment](https://github.com/davezuko/react-redux-starter-kit/issues/730#issuecomment-213997120) by [DonHansDampf](https://github.com/DonHansDampf) addressing Heroku deployments.

Have more questions? Feel free to submit an issue or join the Gitter chat!

## Build System

### Configuration

Default project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the actual webpack build configuration**.

If you need environment-specific overrides (useful for dynamically setting API endpoints, for example), you can edit `~/config/environments.js` and define overrides on a per-NODE_ENV basis. There are examples for both `development` and `production`, so use those as guidelines. Here are some common configuration options:

|Key|Description|
|---|-----------|
|`dir_src`|application source code base path|
|`dir_dist`|path to build compiled application to|
|`server_host`|hostname for the Koa server|
|`server_port`|port for the Koa server|
|`compiler_css_modules`|whether or not to enable CSS modules|
|`compiler_devtool`|what type of source-maps to generate (set to `false`/`null` to disable)|
|`compiler_vendor`|packages to separate into to the vendor bundle|


### Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|
|`__DEBUG__`|True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)|
|`__BASENAME__`|[history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)|

### Styles 样式

Both `.scss` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

所有的css和sass都支持CSS Modules。只要被引入，都会经过PostCSS压缩，加前缀。在生产环境下会转换为到.css文件。

### Server 服务

This starter kit comes packaged with an Koa server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Koa app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

这个项目的服务端使用Koa。需要注意的是，只有一个目的那就是提供了webpack-dev-middleware 和 webpack-hot-middleware（代码热替换）。使用自定义的Koa程序替换webpack-dev-server，让它更容易实现universal 渲染和为了不使这个包过于庞大。

### Production Optimization 打包优化

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined. Additionally, in production, we use [react-optimize](https://github.com/thejameskyle/babel-react-optimize) to further optimize your React code.

In production, webpack will extract styles to a `.css` file, minify your JavaScript, and perform additional optimizations such as module deduplication.

Babel被配置babel-plugin-transform-runtime以便不需要在运行时转换。另外，在生产环境，我们使用react-optimize来优化React代码。
在生产环境下，webpack会导出一个css文件并压缩Javascript，并把js模块优化到最好的性能。

## Learning Resources

* [Starting out with react-redux-starter-kit](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/) is an introduction to the components used in this starter kit with a small example in the end.

## FAQ

Having trouble? Check out our [FAQ](https://github.com/davezuko/react-redux-starter-kit/wiki/FAQ:-Frequently-Asked-Questions) or submit an issue. Please be considerate by only posting issues that are directly related to this project; questions about how to implement certain React or Redux features are both best suited for StackOverflow or their respective repositories.

## Thank You

This project wouldn't be possible without help from the community, so I'd like to highlight some of its biggest contributors. Thank you all for your hard work, you've made my life a lot easier and taught me a lot in the process.

* [Justin Greenberg](https://github.com/justingreenberg) - For all of your PR's, getting us to Babel 6, and constant work improving our patterns.
* [Roman Pearah](https://github.com/neverfox) - For your bug reports, help in triaging issues, and PR contributions.
* [Spencer Dixin](https://github.com/SpencerCDixon) - For your creation of [redux-cli](https://github.com/SpencerCDixon/redux-cli).
* [Jonas Matser](https://github.com/mtsr) - For your help in triaging issues and unending support in our Gitter channel.

And to everyone else who has contributed, even if you are not listed here your work is appreciated.
