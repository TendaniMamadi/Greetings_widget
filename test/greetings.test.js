describe("test my error message", function(){

    it("should return please enter your name if name is not entered", function () {

        assert.equal("", Greetings("should return please enter your name"));
    });

    it("should return please select language if radio button is not checked", function () {

        assert.equal("", Greetings("please select language"));
    });
});