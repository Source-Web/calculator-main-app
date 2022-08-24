let themeChanger = document.getElementById('themeThumb');
let btn = document.querySelectorAll('.btn');
let inputScreen = document.getElementById('inputScreen');
let answerScreen = document.getElementById('answerScreen');
let delBtn = document.getElementById('delBtn');
let equalBtn = document.getElementById('equalBtn');
let resetBtn = document.getElementById('resetBtn');



/*Function to Change Theme*/
themeChanger.addEventListener('change', () =>{
    if(themeChanger.value == 2){
        document.body.className = 'light';
    }

    else if(themeChanger.value == 3){
        document.body.className = 'medium';
    }

    else{
        document.body.className = 'default';
    }
});

/*Get Button Value and Print to Input Screen*/

btn.forEach(button => {
    button.addEventListener("click", getBtnValue);
});

function getBtnValue(event){
    let btnValue = event.target.dataset.val;
    inputScreen.value = inputScreen.value + btnValue;
}

/*Evaluate Screen Value*/

equalBtn.addEventListener('click', evaluateScreenVal);

function evaluateScreenVal(){
    
    if(inputScreen.value === ""){
        answerScreen.value = "";
    }

    /*else if(!isValid(inputScreen.value)){
        answerScreen.value = "Syntax Error";
    }*/

    else if(isFinite(eval(inputScreen.value)) == false || isNaN(eval(inputScreen.value)) == true) {
        answerScreen.value = "Math Error";
        inputScreen.value = "";
    }

    else{
        answerScreen.value = eval(inputScreen.value).toLocaleString('en-Us');
    }
}

/*Make Del Button Active*/

delBtn.addEventListener('click', delOneChar);

function delOneChar(){
    inputScreen.value = inputScreen.value.substr(0, inputScreen.value.length - 1);

    if(inputScreen.value === "") {
        answerScreen.value = "";
    }
}

/*Make Reset Button Active*/

resetBtn.addEventListener('click', resetAll);

function resetAll(){
    inputScreen.value = "";
    answerScreen.value = "";
}

/*Check Validity Of Input Screen*/

//function isValid(){
    //return /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/.test(inputScreen.value);
//}
