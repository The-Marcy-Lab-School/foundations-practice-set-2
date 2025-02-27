/* eslint-disable global-require */
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'Arrow Function Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

// Import functions from src/from-scratch.js
const {
  add,
  // isEven,
  // getFirstChar,
  // square,
  // concatStrings,
  // isPositive,
  // doubleArray,
  // getLength,
  // isPalindrome,
  // toUpperCase,
} = require('../src/from-scratch');

describe(testSuiteName, () => {
  test('add: should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 4)).toBe(3);
    expect(add(0, 0)).toBe(0);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // test('isEven: should check if a number is even', () => {
  //   expect(isEven(4)).toBe(true);
  //   expect(isEven(5)).toBe(false);
  //   expect(isEven(0)).toBe(true);
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('getFirstChar: should return the first character of a string', () => {
  //   expect(getFirstChar('hello')).toBe('h');
  //   expect(getFirstChar('world')).toBe('w');
  //   expect(getFirstChar('')).toBe(undefined); // Edge case
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('square: should return the square of a number', () => {
  //   expect(square(4)).toBe(16);
  //   expect(square(-3)).toBe(9);
  //   expect(square(0)).toBe(0);
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('concatStrings: should concatenate two strings', () => {
  //   expect(concatStrings('hello', 'world')).toBe('helloworld');
  //   expect(concatStrings('', 'test')).toBe('test');
  //   expect(concatStrings('JavaScript', '')).toBe('JavaScript');
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('isPositive: should check if a number is positive', () => {
  //   expect(isPositive(5)).toBe(true);
  //   expect(isPositive(-1)).toBe(false);
  //   expect(isPositive(0)).toBe(false); // Edge case
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('doubleArray: should double all values in an array', () => {
  //   expect(doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
  //   expect(doubleArray([])).toEqual([]); // Edge case
  //   expect(doubleArray([-1, 0, 5])).toEqual([-2, 0, 10]);
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('getLength: should return the length of a string', () => {
  //   expect(getLength('hello')).toBe(5);
  //   expect(getLength('')).toBe(0); // Edge case
  //   expect(getLength('JavaScript')).toBe(10);
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('isPalindrome: should check if a string is a palindrome', () => {
  //   expect(isPalindrome('racecar')).toBe(true);
  //   expect(isPalindrome('hello')).toBe(false);
  //   expect(isPalindrome('')).toBe(true); // Edge case: an empty string is technically a palindrome
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // test('toUpperCase: should convert a string to uppercase', () => {
  //   expect(toUpperCase('hello')).toBe('HELLO');
  //   expect(toUpperCase('JavaScript')).toBe('JAVASCRIPT');
  //   expect(toUpperCase('')).toBe(''); // Edge case
  //   scoreCounter.correct(expect); // DO NOT TOUCH
  // });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
