import { describe } from 'mocha';
import { romanToInt } from './RomanToInteger';
import * as assert from "assert";
import * as chai from "chai";

describe('roman to integer function', () => {
    it('should return integer corresponding to the input roman numeral', () => {
        assert.strictEqual(romanToInt("III"), 3);
        assert.strictEqual(romanToInt("IV"), 4);
        assert.strictEqual(romanToInt("MCMXCIV"), 1994);
        assert.strictEqual(romanToInt("MMMCMXCVIII"), 3998);
    });
    
    it('should throw if input less than 1 or more than 15 in length', () => {
        chai.expect(() => romanToInt("")).to.throw();
        chai.expect(() => romanToInt("MCMXCIVMCMXCIVIV")).to.throw();
    });
})