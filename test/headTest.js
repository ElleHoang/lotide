const { assert } = require('chai');
const head = require('../head');

describe("head", () => {
  it('should return 3 for [3, 4, 5]', () => {
    assert.strictEqual(head([3, 4, 5]), 3);
  });
  it('should return undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
  it('should return "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('should return "Labs" for ["Labs"]', () => {
    assert.strictEqual(head(["Labs"]), "Labs");
  });
});