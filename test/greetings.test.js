describe("test my error message", function(){
    let greeting = Greetings();

    it("should return please enter your name if name is not entered", function () {

        assert.equal("", Greetings("should return please enter your name"));
    });

    it("should return please select language if radio button is not checked", function () {

        assert.equal("", Greetings("please select language"));
    });
});

describe("Testing the validation functionality",function(){

    it("It should return false if name has number",function(){
        let greeting = Greetings()

        assert.equal( false , greeting.validateName("2Pac") ) 
    })
})