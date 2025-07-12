let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let input = '';

function calculate(expression) {
    // Safe evaluation using Function constructor
    try {
        let result = new Function('return ' + expression)();
        if (result === Infinity || isNaN(result)) {
            return 'Error';
        }
        return result;
    } catch {
        return 'Error';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            input = '';
            display.innerText = '0';
            return;
        }

        if (button.id === 'equal') {
            let result = calculate(input);
            display.innerText = result;
            input = result.toString();
            return;
        }

        input += value;
        display.innerText = input;
    });
});
