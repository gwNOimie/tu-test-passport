const expect = require('expect');
const userModel = require('../../app/models/userModel');

describe("userModel", () => {
    it("Must be invalid if email is empty", function(done) {
        var user = new userModel();

        user.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
})