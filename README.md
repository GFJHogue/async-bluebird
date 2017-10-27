# async-bluebird

[![npm version](https://badge.fury.io/js/async-bluebird.svg)](https://badge.fury.io/js/async-bluebird) [![Build Status](https://travis-ci.org/GFJHogue/async-bluebird.svg?branch=master)](https://travis-ci.org/GFJHogue/async-bluebird)

A [`bluebird` promisified](http://bluebirdjs.com/docs/api/promise.promisify.html) wrap of [`async`](https://github.com/caolan/async) - async utitlities for node and the browser.

I made this because I felt like it's more productive than manually wrapping `async` functions with Promises every time I want to use them.


## Install & Require:

* `npm i async-bluebird`

```js
// Promisified async & bluebird Promises
var {async, Promise} = require('async-bluebird');

// Just Promisified async
var async = require('async-bluebird');
```


## Usage:

* See `async` documentation at: https://caolan.github.io/async/

* See `Promise` documentation at: http://bluebirdjs.com/docs/api-reference.html

### Example

```js
// With callback:
async.each([1,2,3], (item, callback) => {
  // Callback on each item
}, (err) => {
  if (err) {
    // Handle error
  } else {
    // Success
  }
})

// With Promise:
async.each([1,2,3], (item, callback) => {
  // Callback on each item
}).then(() => {
  // Success
}).catch((err) => {
  // Handle error
});
```


## Why use Promises?

Converting `async`'s utility functions into Promises allows us to easily integrate them with our promise-using code and promise-chains.

* Why Promises?: http://bluebirdjs.com/docs/why-promises.html

* Understand promises before you start using async/await: https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8
