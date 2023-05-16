function Greetings(list) {
    var namesGreeted = list || [];



    function greetings1(name, language) {
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

    function greeted(name) {

        if (namesGreeted.includes(name) === false) {

            namesGreeted.push(name);
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

        if (!radioBtn) {

            return "Please select language!";

        } else if (!inputType) {


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
        errorMessage
    }
}
