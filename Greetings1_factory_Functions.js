function Greetings(list) {
    var namesGreeted = list || [];
    


    function greetings1(name, language) {
        greeted(name);

        if (language == "Eng") {
            return "Hello!" + " "+name
        }

        if (language == "Esp") {
            return "Ola!" + " " +name
        }

        if (language == "Ven") {
            return "Ndaa!" + " " +name
        }

    }

    function greeted(name){

        if (namesGreeted.includes(name) === false) {

            namesGreeted.push(name);
        } else {
           
            return  "name already exists!"
        }
    } 


    function getArray(){
        return namesGreeted
    }


    function counter() {

        return namesGreeted.length
       
    }

    function errorMessage() {

        if (radioBtn == null) {
           
            return "Please select languange!";
        }

        if (inputType.value === "") {
            paragraph.classList.add("red")

            if (radioBtn.value == "Eng") {
                paragraph.innerHTML = "Please enter your name!"
            }

            if (radioBtn.value == "Esp") {
                paragraph.innerHTML = "Introduzca su nombre"
            }

            if (radioBtn.value == "Ven") {
                paragraph.innerHTML = "Dzhenisani dzina"

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
