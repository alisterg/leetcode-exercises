import { describe } from 'mocha';
import { reverse } from './ReverseInteger';
import * as assert from "assert";

describe('reverse function', () => {
    it('should return zero for larger than 32 bits or zero', () => {
        assert.strictEqual(reverse(0), 0);
        assert.strictEqual(reverse(Math.pow(2, 31)), 0);
        assert.strictEqual(reverse(-Math.pow(2, 31) - 1), 0);
    });

    it('should return zero for a valid number but when reversed is invalid', () => {
        assert.strictEqual(reverse(1534236469), 0);
    });

    it('should return correctly for positive integer', () => {
        assert.strictEqual(reverse(321), 123);
    });

    it('should return correctly for negative integer', () => {
        assert.strictEqual(reverse(-321), -123);
    });
})