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

    /*Prevent Keydown of '.' twice for One Operand*/

    if (btnValue === "." && screen.value.match(/[-+*\/]/g)) {

        let operandArr = screen.value.split(/[-+*\/]/g);
        for (i = 1; i < operandArr.length; i++)
            if (operandArr[(operandArr.length - 1)].includes(".")) {
                return false;
            }

            else if (operandArr[(operandArr.length - 1)] === "") {
                btnValue = event.target.dataset.val2;
            }
        return screen.value = (screen.value + btnValue).replace(/,/g, "");
    }

    else if (btnValue === "." && screen.value.includes(".")) {
        return;
    }

    else if (btnValue === "." && screen.value === "") {
        btnValue = event.target.dataset.val2;
    }

    /*Truncate Leading Zero*/

    if (btnValue === "0" && screen.value.match(/[-+*\/]/g)) {

        let operandArr = screen.value.split(/[-+*\/]/g);
        for (i = 1; i < operandArr.length; i++) {
            if (operandArr[(operandArr.length - 1)] === "") {
                return;
            }

            return screen.value = (screen.value + btnValue).replace(/,/g, "");
        }
    }

    else if (btnValue === "0" && screen.value === "") {
        return;
    }

    /*Check Invalid Operands*/

    if (btnValue.match(/[+*\/]/g) && screen.value.match(/[+*\/]/g)) {

        let operandArr = screen.value.split(/[+*\/]/g);
        for (i = 1; i < operandArr.length; i++) {
            if (operandArr[(operandArr.length - 1)] === "") {
                return;
            }

            return screen.value = (screen.value + btnValue).replace(/,/g, "");
        }
    }

    // else if (btnValue.match(/[-]/g) && screen.value.match(/[-+]/g)) {

    //     let operandArr = screen.value.split(/[-+*\/]/g);
    //     for (i = 1; i < operandArr.length; i++) {
    //         if (operandArr[(operandArr.length - 1)] === "") {
    //             return;
    //         }

    //         return screen.value = (screen.value + btnValue).replace(/,/g, "");
    //     }
    // }

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
