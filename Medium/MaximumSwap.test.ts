import {describe} from 'mocha';
import {maximumSwap} from './MaximumSwap';
import * as chai from "chai";
import * as assert from "assert";

describe('maximumSwap function', () => {
  it('Should throw exception if input greater than 10^8 or less than 0', () => {
    chai.expect(() => maximumSwap(-1)).to.throw();
    chai.expect(() => maximumSwap(-12345678)).to.throw();
    chai.expect(() => maximumSwap(193825492834597623485)).to.throw();
  });

  it('Should swap numbers to product the biggest number', () => {
    assert.strictEqual(maximumSwap(2736), 7236);
    assert.strictEqual(maximumSwap(9973), 9973);
    assert.strictEqual(maximumSwap(1234567), 7234561);
  });
});
