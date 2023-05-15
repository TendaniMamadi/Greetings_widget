var inputType = document.querySelector(".textBox");
var span = document.querySelector(".count");
var paragraph = document.querySelector('.message');
var greetBtn = document.querySelector(".greetings");
var clearBtn = document.querySelector(".clearing");
// var error = document.querySelector(".Error")
var greetedNames = JSON.parse(localStorage.getItem("nameList")) //retrieving names from server
const greet = Greetings(greetedNames);


// var namesGreeted = greetedNames || [];//pushing new names in an array
span.innerHTML = greet.counter();//checking greeted names

greetBtn.addEventListener('click', function () {
    paragraph.classList.remove("orange")
    paragraph.classList.remove("red")

    var radioBtn = document.querySelector('input[name="Language"]:checked');
    if (inputType.value != "" && radioBtn) {

        paragraph.innerHTML = greet.greetings1(inputType.value, radioBtn.value)
        // if (radioBtn.value == "Eng") {
        //     paragraph.innerHTML = "Hello!" + " " + inputType.value
        // }

        // if (radioBtn.value == "Esp") {
        //     paragraph.innerHTML = "Ola!" + " " + inputType.value
        // }

        // if (radioBtn.value == "Ven") {
        //     paragraph.innerHTML = "Ndaa!" + " " + inputType.value
        // }
        // if (namesGreeted.includes(inputType.value) === false) {

        //     namesGreeted.push(inputType.value);
        // } else {
        //     paragraph.classList.add("orange")
        //     paragraph.innerHTML = "name already exists!"
        // }
        localStorage.setItem("nameList", JSON.stringify(greet.getArray()))//this is to convert our array to string and storing data in our local storage
        span.innerHTML = greet.counter();// memorises the name

    }

    //error messages

    if (radioBtn == null) {
        paragraph.classList.add("red")
        paragraph.innerHTML = "Please select language!";
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
            paragraph.innerHTML = "Dzhenisani dzina!"

        }

    }
});








clearBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload()

});
