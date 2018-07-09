//Get references for text box, display, button and countName
var enteredNameElement = document.querySelector(".nameInput");
var greetMeElement = document.querySelector(".greetMe");
var displayElement = document.querySelector(".display");
var countElement = document.querySelector(".countElem");
var resetElement = document.querySelector(".reset");
var validation = document.querySelector(".validation")
var language = document.querySelector(".language")
var initialValue = JSON.parse(localStorage.getItem('count'));

//Declare instance of GREETINGS and pass initial value as argument
var newGreetings = greetings(initialValue);
countElement.innerHTML = newGreetings.getEnteredNameCount();

var clear = function(){
    enteredNameElement.value = "";
}
var clearInput = function(){
  validation.innerHTML = "";
}
var clearLanguage = function(){
  language.innerHTML = "";
}
//Add an event listener when greet me is clicked
greetMeElement.addEventListener("click", function(){
  //Declare a varible to get entered name value and counted Value
  var enteredName = enteredNameElement.value.toUpperCase();
  var checkedRadioBtn = document.querySelector("input[name='whichLanguage']:checked");
  //Check if there is a name in the text field or checkbox is checked if not alert user
  if(enteredName == null || enteredName == ""){
    validation.innerHTML = "Please enter a name in the text field..!";
    return false;
  }else if(checkedRadioBtn){
      var checked = checkedRadioBtn.value;
    }
    else {
      language.innerHTML = "Please select one of the languages in one of the radio buttons..!";
      return false;
    }
    console.log(enteredName)
    var selectedLanguage = newGreetings.setEnteredName(checked, enteredName);
  displayElement.innerHTML = selectedLanguage;
  countElement.innerHTML = newGreetings.getEnteredNameCount();
  localStorage.setItem('count', JSON.stringify(newGreetings.map()));
  //Call clear textbox, clearInput and clearLanguage function
  clear();
  clearInput();
  clearLanguage();
});

resetElement.addEventListener('click', function(){
localStorage.clear()
newGreetings.resetData();
location.reload()
});
