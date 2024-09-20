const keys = document.querySelectorAll('#calculator span');
const operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;
let screen = document.querySelector('#screen'); 

for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        let input = screen.innerHTML; 
        let btnValue = this.innerHTML;
        if (btnValue == 'C') {
            screen.innerHTML = '';
            decimalAdded = false; 
        }

        else if (btnValue == '=') {
            let equation = input; 
            let lastChar = equation[equation.length - 1]; 

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.slice(0, -1);

            if (equation) screen.innerHTML = eval(equation);

            decimalAdded = false; 
        }
        else  {
            screen.innerHTML += btnValue;
        }

        e.preventDefault(); 
    }
}
