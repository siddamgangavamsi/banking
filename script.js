let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let text = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML== '=') {
            text = eval(text);
            input.value = text;
        }
        else if (e.target.innerHTML == 'DEL') {
            text = text.substring(0, text.length - 1);
            input.value = text;
        }
        else if (e.target.innerHTML == 'AC') {
            text = "";
            input.value = text;
        }
        else
            text += e.target.innerHTML;
        input.value = text;


    })
})