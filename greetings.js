var inputType = document.querySelector(".textBox");
var span = document.querySelector(".count");
var paragraph = document.querySelector('.message');
var greetBtn = document.querySelector(".greetings");
var clearBtn = document.querySelector(".clearing");

var greetedNames = JSON.parse(localStorage.getItem("nameList"))
console.log(greetedNames);

var namesGreeted =greetedNames || [];
span.innerHTML = namesGreeted.length;

greetBtn.addEventListener('click', function () {
    paragraph.classList.remove("orange")

    var radioBtn = document.querySelector('input[name="Language"]:checked');

    if (radioBtn.value == "Eng") {
        paragraph.innerHTML = "Hello!" + " " + inputType.value
    }

    if (radioBtn.value == "Esp") {
        paragraph.innerHTML = "Ola!" + " " + inputType.value
    }

    if (radioBtn.value == "Ven") {
        paragraph.innerHTML = "Ndaa!" + " " + inputType.value
    }


    var counter = 0;
    
    if (namesGreeted.includes(inputType.value) === false) {
        // counter++;
        namesGreeted.push(inputType.value);
        
        
    } else {
        paragraph.classList.add("orange")
        paragraph.innerHTML = "name already exists"
    }
    console.log(namesGreeted);
    localStorage.setItem("nameList",JSON.stringify(namesGreeted))//this is to make our array to be accepted to our local storage
    span.innerHTML = namesGreeted.length;// memorises the name

});




clearBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload()

});
