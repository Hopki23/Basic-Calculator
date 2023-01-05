let display = document.getElementById('display');
let buttons = [...document.querySelectorAll('.button')];

buttons.forEach(b => b.addEventListener('click', e => {
    let target = e.target.textContent;
    if (display.textContent == 'Error!') display.textContent = '';
    switch (target) {
        case 'C':
            display.textContent = '';
            break;
        case '=':
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error!';
            }
            break;
        default:
            if (!display.textContent) {
                if (target == '/' || target == '*' || target == '-' || target == '+') {
                    document.querySelectorAll('#function').disabled = true;
                } else {
                    display.textContent += target;
                }
            } else {
                display.textContent += target;
            }
    }
}))
