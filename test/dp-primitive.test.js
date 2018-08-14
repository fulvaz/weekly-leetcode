const {expect, should} = require('chai');
const {main} = require('../src/dp-primitive');


describe('dp primitive: find LIS', function() {
    it('should all good', function() {
        const results = new Map([
            [[5], 1],
            [[5, 3], 1],
            [[5, 3, 4], 2],
            [[5, 3, 4, 8], 3],
            [[5, 3, 4, 8, 6], 3],
            [[5, 3, 4, 8, 6, 7], 4],
        ]);
        
        for (let [key, value] of results) {
            expect(main(key)).to.equal(value);
        }
    })
})