var inputType = document.querySelector(".textBox");
var span = document.querySelector(".count");
var paragraph = document.querySelector('.message');
var greetBtn = document.querySelector(".greetings");
var clearBtn = document.querySelector(".clearing");
var greetedNames = JSON.parse(localStorage.getItem("nameList")) //retrieving names from server

const greet = Greetings(greetedNames);



span.innerHTML = greet.counter();//checking greeted names

greetBtn.addEventListener('click', function () {
    paragraph.classList.remove("red")

    var radioBtn = document.querySelector('input[name="Language"]:checked');

    if(radioBtn){
       var RadioButton_value = radioBtn.value
    }

    if (inputType.value != "" && radioBtn) {

        paragraph.innerHTML = greet.greetings1(inputType.value, RadioButton_value )

        setTimeout(() => {
            inputType.value = '';
           

        }, 2500)

        localStorage.setItem("nameList", JSON.stringify(greet.getArray()))//this is to convert our array to string and storing data in our local storage
        paragraph.classList.add("orange")
        span.innerHTML = greet.counter();// memorises the name


    } else {
        paragraph.classList.add("red")
        paragraph.innerHTML = greet.errorMessage(RadioButton_value , inputType.value);
        setTimeout(() => {
            paragraph.innerHTML = ''

        }, 2000)

    }


});



clearBtn.addEventListener('click', function () {

    localStorage.clear();
    span.innerHTML = greet.getClearButton();
    setTimeout(() => {
        paragraph.innerHTML = ''
        location.reload()

    }, 2000)
    paragraph.classList.add("green")
    greet.setClearMsg();
    paragraph.innerHTML = greet.getClearMsg();
    
    

});


