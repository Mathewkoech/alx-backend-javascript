const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe } = require('node:test');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the subtraction of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
    });
});
