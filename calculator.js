let btn = document.querySelectorAll('.btn');
let screen = document.getElementById('screen');
let delBtn = document.getElementById('delBtn');
let equalBtn = document.getElementById('equalBtn');
let resetBtn = document.getElementById('resetBtn');

/*Get Button Value and Print to Screen*/

btn.forEach(button => {
    button.addEventListener("click", getBtnValue);
});

function getBtnValue(event) {
    let btnValue = event.target.dataset.val;
    screen.value = (screen.value + btnValue).replace(/,/g, "");
}

/*Evaluate Screen Value*/

equalBtn.addEventListener('click', evaluateScreenVal);

function evaluateScreenVal() {

    if (screen.value === "") {
        screen.value = "";
    }

    else if (isFinite(eval(screen.value)) == false || isNaN(eval(screen.value)) == true) {
        screen.value = "Math Error";
        setTimeout(resetAll, 3000);
    }

    else {
        let answer = screen.value.replace(/,/g, "");
        screen.value = eval(answer).toLocaleString('en-Us');
    }
}


/*Make Del Button Active*/

delBtn.addEventListener('click', delOneChar);

function delOneChar() {
    let screenDel = screen.value.replace(/,/g, "");
    screen.value = screenDel.substr(0, screenDel.length - 1);

    if (screen.value === "") {
        screen.value = "";
    }
}

/*Make Reset Button Active*/

resetBtn.addEventListener('click', resetAll);

function resetAll() {
    screen.value = "";
    screen.value = "";
}
