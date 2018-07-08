const {expect, should} = require('chai');
const {main} = require('../src/dp-entry');


describe('dp entry', function() {
    it('should all good', function() {
        const results = {
            0: 0,
            1: 1,
            2: 2,
            3: 1,
            4: 2,
            5: 1,
            6: 2,
            7: 3,
            8: 2,
            9: 3,
            10: 2,
            11: 3,
        };
        Object.entries(results).forEach(([total, expected]) => {
            expect(main(parseInt(total))).to.equal(expected);
        });
    })
})