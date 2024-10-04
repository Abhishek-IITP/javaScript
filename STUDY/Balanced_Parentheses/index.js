function isBalanced(expression) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of expression) {
        if (char in pairs) {
            stack.push(char);
        } else if (stack.length > 0 && char === pairs[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

// Example usage:
const expression = "{[()]}";
console.log(isBalanced(expression));  // Output: true
