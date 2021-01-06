import { describe } from 'mocha';
import {canWinNim} from "./NimGame";
import * as assert from "assert";

describe('canWinNim', () => {
    it('should return true if I win the game', () => {
        assert.strictEqual(canWinNim(5), true);
    });

    it('should return false if I lose the game', () => {
        assert.strictEqual(canWinNim(4), false);
    });

    it('should return true for input under 4', () => {
        assert.strictEqual(canWinNim(3), true);
        assert.strictEqual(canWinNim(2), true);
        assert.strictEqual(canWinNim(1), true);
    });

    it('should return true for random large number that I win for', () => {
        assert.strictEqual(canWinNim(123456789), true);
    });


    it('should return false for random large number that I lose for', () => {
        assert.strictEqual(canWinNim(123456788), false);
    });
})