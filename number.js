const result = document.getElementById("result");

function addRow(method, output){
    result.innerHTML += `
      <tr>
        <td>${method}</td>
        <td>${output}</td>
      </tr>
    `;
}

let num = 123.456;

// Number Methods
addRow("toString()", num.toString());

addRow("toExponential()", num.toExponential(2));

addRow("toFixed()", num.toFixed(2));

addRow("toPrecision()", num.toPrecision(5));

addRow("valueOf()", num.valueOf());


// Converting Variables to Numbers
addRow("Number('500')", Number("500"));

addRow("parseInt('100px')", parseInt("100px"));

addRow("parseFloat('12.99')", parseFloat("12.99"));


// Number Properties
addRow("Number.MAX_VALUE", Number.MAX_VALUE);

addRow("Number.MIN_VALUE", Number.MIN_VALUE);

addRow("Number.POSITIVE_INFINITY", Number.POSITIVE_INFINITY);

addRow("Number.NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);

addRow("Number.NaN", Number.NaN);


// Checking Numbers
addRow("Number.isInteger(10)", Number.isInteger(10));

addRow("Number.isInteger(10.5)", Number.isInteger(10.5));

addRow("Number.isNaN('Hello')", Number.isNaN("Hello"));

addRow("isNaN('Hello')", isNaN("Hello"));


// Math Methods
addRow("Math.round(4.6)", Math.round(4.6));

addRow("Math.ceil(4.2)", Math.ceil(4.2));

addRow("Math.floor(4.9)", Math.floor(4.9));

addRow("Math.trunc(4.9)", Math.trunc(4.9));

addRow("Math.pow(2,3)", Math.pow(2,3));

addRow("Math.sqrt(64)", Math.sqrt(64));

addRow("Math.abs(-20)", Math.abs(-20));

addRow("Math.min(1,2,3)", Math.min(1,2,3));

addRow("Math.max(1,2,3)", Math.max(1,2,3));

addRow("Math.random()", Math.random());


// Special Values
addRow("1 / 0", 1 / 0);

addRow("-1 / 0", -1 / 0);

addRow("'abc' * 5", "abc" * 5);