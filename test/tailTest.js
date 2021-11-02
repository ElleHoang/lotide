const { assert } = require('chai');
const tail = require('../tail');

describe("tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('should return 3 for tail(words)', () => {
    assert.strictEqual((words.length), 3);
  });
  it('should return 2 for tail(words).length', () => {
    assert.strictEqual((tail(words).length), 2);
  });
  it('should return ["Lighthouse,Labs"] DOES NOT EQUAL ["Lighthouse,Labs"]', () => {
    assert.notStrictEqual((tail(words)), ['Lighthouse', 'Labs']);
  });
});