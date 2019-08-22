<h1 align="center">dannyfranca/ts-boilerplate</h1>
<p align="center">Starting point to build TypeScript repositories.</p>
<p align="center">

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Travis CI][travis-ci-src]][travis-ci-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

</p>

## Install

```bash
git clone https://github.com/dannyfranca/ts-boilerplate.git
yarn
```

## Warning

Experimental environment. Could change many times between versions, at least until v1.0 arrives.

### Bugs

Circle CI not playing nice right now. More tests needed until a decent starting point with TypeScript, Cypress and CI (Circle or Travis)

## Libs

* Compiler - [TypeScript](https://www.typescriptlang.org)
* Linting - [TypeScript ESLint](https://typescript-eslint.io)
* Bundler - [Parcel JS](https://parceljs.org)
* E2E/Unit/CI Suite - [Cypress](https://www.cypress.io)
* Coverage Reports - [Istanbul](https://istanbul.js.org)
* Continuous Integration - [CircleCI](https://circleci.com)/[TravisCI](https://travis-ci.com)
* Code Coverage - [Codecov](https://codecov.io)
* Git Hooks - [Husky](https://github.com/typicode/husky)

## Usage

Start writing in src folder. modify any project files that fits you needs.

In package.json you have commands to dev, test, compile and build.

### NPM Commands

#### Test

Commands to test you application

* *dev*: Start developing with Parcel, Cypress and code coverage, all hot reloading
* *test*: If you want to test and generate code coverage reports, use before publish
* *cypress:open*: Open cypress to test (server must be already running). Useful if you are already developing and just need to make some tests, without reload the whole process
* *cypress:run*: Run tests in terminal, without UI. Useful the same way cypress:open is
* *coverage*: You don't need to run this command, it's for Circle CI perform Continuous Integration after git push

#### Bundle

Commands to help you bundling you front-end application

* *start*: to develop only with Parcel, without tests and code coverage
* *build*: Generate production bundles from public to dist folder

#### Module

Commands to help you compile your TypeScript application to interoperable modules.

* *compile*: Compile your TypeScript files in "src" to "lib" folder, with types, making your module interoperable with JavaScript
* *compile:watch*: Same as compile, but keeps a process watching and recompiling the changes
* *compile:types*: Only emits the type declaration files
* *type-check*: Only check the types, good to run between commits to get errors when working with multiple files (If using built in git hooks with Husky, executed automatically before any commit)

## Conclusion

Have a Nice Coding! 🤓

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <contato@dannyfranca.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dannyfranca/ts-boilerplate.svg?style=flat-square&logo=npm
[npm-version-href]: https://npmjs.com/package/@dannyfranca/ts-boilerplate

[npm-downloads-src]: https://img.shields.io/npm/v/@dannyfranca/ts-boilerplate/latest.svg?style=flat-square&logo=npm
[npm-downloads-href]: https://npmjs.com/package/@dannyfranca/ts-boilerplate

[circle-ci-src]: https://img.shields.io/circleci/project/github/dannyfranca/ts-boilerplate?style=svg?style=flat-square&logo=circleci
[circle-ci-href]: https://circleci.com/gh/dannyfranca/ts-boilerplate

[travis-ci-src]: https://img.shields.io/travis/project/github/dannyfranca/ts-boilerplate?style=svg?style=flat-square&logo=travis
[travis-ci-href]: https://travis-ci.org/travis-ci/dannyfranca/ts-boilerplate

[codecov-src]: https://img.shields.io/codecov/c/github/dannyfranca/ts-boilerplate?style=flat-square&logo=codecov
[codecov-href]: https://codecov.io/gh/dannyfranca/ts-boilerplate

[david-dm-src]: https://david-dm.org/dannyfranca/ts-boilerplate/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dannyfranca/ts-boilerplate

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen?style=flat-square
[standard-js-href]: https://standardjs.com
