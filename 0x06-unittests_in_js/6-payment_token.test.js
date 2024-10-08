const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response from the API', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        }).catch((err) => {
            done(err);
        });
    });

    it('should return a failed response from the API', (done) => {
        getPaymentTokenFromAPI(false).then(() => {
            done(new Error('Expected API call to fail'));
        }).catch((err) => {
            // Check for the correct rejection value
            expect(err).to.deep.equal({ data: 'Error response from the API' });
            done();
        });
    });
});
