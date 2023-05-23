function Greetings(list) {
    var namesGreeted = list || [];
    let clearMsg = "";
   

    let regex = /^[A-Za-z]+$/;

    function greetings1(name, language) {

        if (regex.test(name)) {

            if (greeted(name)) {
                if (language === "Eng") {
                    return "Hello!" + " " + name
                }

                if (language === "Esp") {
                    return "Ola!" + " " + name
                }

                if (language === "Ven") {
                    return "Ndaa!" + " " + name
                }
            }
            else {
                return "name already exists!"
            }
        }
        else {
            return "no numbers & characters allowed!"
        }

    }



    function greeted(nameGreet) {

        var nameGreet = nameGreet.charAt(0).toUpperCase() + nameGreet.slice(1);
        if (namesGreeted.includes(nameGreet) === false) {

            namesGreeted.push(nameGreet);
            return true

        }
   
    }


    function getArray() {
        return namesGreeted
    }


    function counter() {

        return namesGreeted.length

    }

    function errorMessage(radioBtn, inputType) {

      

        if (!inputType && !radioBtn) {

            return "Please enter your name & select language!";

        }


        if (!radioBtn) {
            return "Please select language!";

        }

        else if (!inputType) {

            if (radioBtn === "Eng") {
                return "Please enter your name!"

            } else if (radioBtn === "Esp") {
                return "Introduzca su nombre!"

            } else if
                (radioBtn === "Ven") {
                return "Dzhenisani dzina!"

            }

        }


    }

    function clearButton(){
        namesGreeted.length = 0
    }

    function getClearButton (){
        return namesGreeted.length
    }


    function setClearMsg(){
        clearMsg = "Successfully cleared!"
    }

    function getClearMsg(){
        return clearMsg
    }




    return {
        greetings1,
        greeted,
        getArray,
        counter,
        errorMessage,
        clearButton,
        getClearButton,
        setClearMsg,
        getClearMsg
        
    }

}