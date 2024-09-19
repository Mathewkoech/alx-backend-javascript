const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    // Hook to spy on console.log before each test
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    // Hook to restore the original console.log after each test
    afterEach(() => {
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM and correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
        sinon.assert.callCount(consoleSpy, 1);
    });

    it('should log the correct message', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
        sinon.assert.callCount(consoleSpy, 1);
    });
});