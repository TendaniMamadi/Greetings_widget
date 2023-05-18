var inputType = document.querySelector(".textBox");
var span = document.querySelector(".count");
var paragraph = document.querySelector('.message');
var greetBtn = document.querySelector(".greetings");
var clearBtn = document.querySelector(".clearing");
var greetedNames = JSON.parse(localStorage.getItem("nameList")) //retrieving names from server
const greet = Greetings(greetedNames);


span.innerHTML = greet.counter();//checking greeted names

greetBtn.addEventListener('click', function () {
    paragraph.classList.remove("orange")
    paragraph.classList.remove("red")

    var radioBtn = document.querySelector('input[name="Language"]:checked');

    if (inputType.value != "" && radioBtn) {

        paragraph.innerHTML = greet.greetings1(inputType.value, radioBtn.value)

        setTimeout(() => {
            inputType.value = '';
            paragraph.innerHTML = ''

        }, 3000)

        localStorage.setItem("nameList", JSON.stringify(greet.getArray()))//this is to convert our array to string and storing data in our local storage
        paragraph.classList.add("red")
        span.innerHTML = greet.counter();// memorises the name


    } else {
        paragraph.classList.add("red")
        paragraph.innerHTML = greet.errorMessage(radioBtn, inputType.value);
        setTimeout(() => {
            paragraph.innerHTML = ''

        }, 5000)

    }

});



clearBtn.addEventListener('click', function () {
    localStorage.clear();
    paragraph.classList.add("green")
    paragraph.innerHTML = "successfully cleared!"
    setTimeout(() => {
        paragraph.innerHTML = ''

    }, 5000)
    location.reload()


});
