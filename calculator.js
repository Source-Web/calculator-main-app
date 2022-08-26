let themeChanger = document.getElementById('themeThumb');
let theme = window.localStorage.getItem('data-theme');
let btn = document.querySelectorAll('.btn');
let screen = document.getElementById('screen');
let delBtn = document.getElementById('delBtn');
let equalBtn = document.getElementById('equalBtn');
let resetBtn = document.getElementById('resetBtn');


/*if(theme = 'dark') {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.className = 'default';
        themeChanger.value = 1;
    }

    else{
        document.documentElement.setAttribute('data-theme', theme);
        document.body.className = 'light';
        themeChanger.value = 2;
    }*/


/*Function to Change Theme*/
themeChanger.addEventListener('change', () =>{
    if(themeChanger.value == 2){
        document.body.className = 'light';
        //window.localStorage.setItem('data-theme', 'light');
    }

    else if(themeChanger.value == 3){
        document.body.className = 'medium';
        //window.localStorage.setItem('data-theme', 'dark');
    }

    else{
        document.body.className = 'default';
        //window.localStorage.setItem('data-theme', 'dark');
    }
});

/*Get Button Value and Print to Screen*/

btn.forEach(button => {
    button.addEventListener("click", getBtnValue);
});

function getBtnValue(event){
    let btnValue = event.target.dataset.val;
    screen.value = (screen.value + btnValue).replace(/,/g, "");
}

/*Evaluate Screen Value*/

equalBtn.addEventListener('click', evaluateScreenVal);

function evaluateScreenVal(){
    
    if(screen.value === ""){
        screen.value = "";
    }

    /*else if(!isValid(screen.value)){
        screen.value = "Syntax Error";
    }*/

    else if(isFinite(eval(screen.value)) == false || isNaN(eval(screen.value)) == true) {
        screen.value = "Math Error";
        setTimeout(resetAll, 3000);
    }

    else{
        let answer = screen.value.replace(/,/g, "");
        screen.value = eval(answer).toLocaleString('en-Us');
    }
}parseFloat

/*Make Del Button Active*/

delBtn.addEventListener('click', delOneChar);

function delOneChar(){
    let screenDel = screen.value.replace(/,/g, "");
    screen.value = screenDel.substr(0, screenDel.length - 1);

    if(screen.value === "") {
        screen.value = "";
    }
}

/*Make Reset Button Active*/

resetBtn.addEventListener('click', resetAll);

function resetAll(){
    screen.value = "";
    screen.value = "";
}

/*Check Validity Of Input Screen*/

//function isValid(){
    //return /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/.test(screen.value);
//}
