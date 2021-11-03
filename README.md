# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ellehoang/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first item in an array.
* `assertEqual`: Compares whether two primitive values are equal.
* `eqArrays`: Compares whether the data of two arrays are equal to each other.
* `assertArrayEqual`: Compares whether two arrays are equal.
* `tail`: Returns all items but the first item in an array.
* `middle`: Returns an array with the middle most element(s) of a given array.
