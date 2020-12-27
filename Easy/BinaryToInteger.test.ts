import { describe } from 'mocha';
import {getDecimalValue, ListNode} from './BinaryToInteger';
import * as assert from "assert";

describe('getDecimalValue', () => {
    it('should return correct integer for arbitrary values', () => {
        let input1 = new ListNode(1, null);
        assert.strictEqual(getDecimalValue(input1), 1);

        let input2 = new ListNode(1, input1);
        assert.strictEqual(getDecimalValue(input2), 3);

        let input3 = new ListNode(1, input2);
        assert.strictEqual(getDecimalValue(input3), 7);

        let input4 = new ListNode(0, input3);
        assert.strictEqual(getDecimalValue(input4), 7);

        let input5 = new ListNode(1, input4);
        assert.strictEqual(getDecimalValue(input5), 23);
    });
    
    it('should return 0 for empty or 0 input', () => {
        assert.strictEqual(getDecimalValue(null), 0);
        assert.strictEqual(getDecimalValue(new ListNode(null, null)), 0);
    })
})