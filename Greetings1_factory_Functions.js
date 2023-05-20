function Greetings(list) {
    var namesGreeted = list || [];

    let regex = /^[A-Za-z\D\s]/g;

    function greetings1(name, language) {

        if (regex.test(name)) {

            if (greeted(name)) {
                if (language == "Eng") {
                    return "Hello!" + " " + name
                }

                if (language == "Esp") {
                    return "Ola!" + " " + name
                }

                if (language == "Ven") {
                    return "Ndaa!" + " " + name
                }
            }
            else {
                return "name already exists!"
            }
        }
        else {
            return "no characters allowed!"
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

            if (radioBtn.value === "Eng") {
                return "Please enter your name!"

            } else if (radioBtn.value === "Esp") {
                return "Introduzca su nombre!"

            } else if
                (radioBtn.value === "Ven") {
                return "Dzhenisani dzina!"

            }

        }


    }



    return {
        greetings1,
        greeted,
        getArray,
        counter,
        errorMessage,
        
    }

}