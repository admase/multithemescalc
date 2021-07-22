$(document).ready(function() {
    'use strict';

    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';

    updateScreen(result);

    $('.btn').on('click', function(e) {
        var btnClicked = $(this).html();
        console.log(btnClicked);

        if (btnClicked === "DEL") {
            result = 0;
            currentEntry = '0';
        } else if (btnClicked === "RESET") {
            currentEntry = '0';
        } else if (btnClicked === ".") {
            currentEntry += '.';
        } else if (isNumber(btnClicked)) {
            if (currentEntry === '0') currentEntry = btnClicked;
            else currentEntry = currentEntry + btnClicked;
        } else if (isOperator(btnClicked)) {
            prevEntry = parseFloat(currentEntry);
            operation = btnClicked;
            currentEntry = '';
        } else if (btnClicked === "=") {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }

        updateScreen(currentEntry);
    });
});

updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
    return !isNaN(value);
}

isOperator = function(value) {
    return value === '/' || value === 'x' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);

    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === 'x') return a * b;
    if (operation === '/') return a / b;
}