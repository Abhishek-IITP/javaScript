let n= prompt("enter the number");
function fizzBuzzGame() {
    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 3 === 0 && i % 5 === 0) {
            output = "%cFizzBuzz";
            console.log(output, "color: red; font-weight: bold;");
        } else if (i % 3 === 0) {
            output = "%cFizz";
            console.log(output, "color: blue; font-weight: bold;");
        } else if (i % 5 === 0) {
            output = "%cBuzz";
            console.log(output, "color: green; font-weight: bold;");
        } else {
            output = `%c${i}`;
            console.log(output, "color: black;");
        }
    }
}
fizzBuzzGame();