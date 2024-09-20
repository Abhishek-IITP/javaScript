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

        // If the '=' button is clicked, do the math
        else if (btnValue == '=') {
            let equation = input; // Get the math equation from the screen
            let lastChar = equation[equation.length - 1]; // Last thing typed

            // Change x to * and ÷ to / because that's how we do math in code
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            // If the last thing typed is a symbol or a dot, remove it
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.slice(0, -1);

            // Now, do the math and show the result on the screen
            if (equation) screen.innerHTML = eval(equation);

            decimalAdded = false; // Reset the dot
        }
        else  {
            screen.innerHTML += btnValue;
        }

        e.preventDefault(); 
    }
}
