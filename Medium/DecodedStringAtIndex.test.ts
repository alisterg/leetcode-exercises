import {describe} from 'mocha';
import {decodeAtIndex} from './DecodedStringAtIndex';
import * as chai from "chai";
import * as assert from "assert";

describe('decodeAtIndex function', () => {
    it('Should return correct letter at index', () => {
        assert.strictEqual(decodeAtIndex("ha22", 5), "h");
        assert.strictEqual(decodeAtIndex("leet2code3", 10), "o");
    });

    // Only allow lowercase letters and digits 2 - 9
    it('Should throw exception if invalid character found in input string', () => {
        chai.expect(() => decodeAtIndex("a01ab", 4)).to.throw();
        chai.expect(() => decodeAtIndex("aza$b", 4)).to.throw();
        chai.expect(() => decodeAtIndex("a lol test", 4)).to.throw();
        chai.expect(() => decodeAtIndex("aAbc", 4)).to.throw();
    });

    it('Should throw exception if input string doesnt start with a letter', () => {
        chai.expect(() => decodeAtIndex("3asdf", 3)).to.throw();
    });

    it('Should throw exception if index is less than 1 or greater than 10^9', () => {
        chai.expect(() => decodeAtIndex("aasdf", 0)).to.throw();
        chai.expect(() => decodeAtIndex("zasdf", Math.pow(10, 10))).to.throw();
    });

    it('Should throw exception if (inputString.length) is less than 2 or is greater than 100', () => {
        chai.expect(() => decodeAtIndex("a", 1)).to.throw();

        const largeString = new Array(101).fill('a', 0, 101).join('');

        chai.expect(() => decodeAtIndex(largeString, 1)).to.throw();
    });
});
