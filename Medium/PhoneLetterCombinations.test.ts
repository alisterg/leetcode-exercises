import {describe} from 'mocha';
import {letterCombinations} from "./PhoneLetterCombinations";
import {expect, assert} from 'chai';

describe('letterCombinations function', () => {
  it('should throw if input.length > 4', () => {
    assert.throws(() => letterCombinations("32345"));
  });

  it('should throw if input contains non-digit chars', () => {
    assert.throws(() => letterCombinations("52a3"));
    assert.throws(() => letterCombinations("b"));
  });

  it('should throw if input contains digits 1 or 0', () => {
    assert.throws(() => letterCombinations("1"));
    assert.throws(() => letterCombinations("0423"));
    assert.throws(() => letterCombinations("313"));
  });

  it('should return empty array for empty input', () => {
    assert.strictEqual(letterCombinations("").length, 0);
  });

  it('should return correct result for input of one digit', () => {
    const result2 = letterCombinations("2");
    expect(result2).to.contain("a");
    expect(result2).to.contain("b");
    expect(result2).to.contain("c");

    const result7 = letterCombinations("7");
    expect(result7).to.contain("p");
    expect(result7).to.contain("q");
    expect(result7).to.contain("r");
    expect(result7).to.contain("s");
  });

  it('should return correct result for input of multiple digits', () => {
    const result = letterCombinations("23");
    assert.deepEqual(result, ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);

    const result2 = letterCombinations("27");
    assert.deepEqual(result2, ["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"]);

    const result3 = letterCombinations("77");
    assert.deepEqual(
      result3,
      ["pp", "pq", "pr", "ps", "qp", "qq", "qr", "qs", "rp", "rq", "rr", "rs", "sp", "sq", "sr", "ss"]
    );
  });
})