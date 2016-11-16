 function clearTextBoxes();

var denominations = [
    { name: 'hundreds', value: 100 },
    { name: 'fifties', value: 50 },
    { name: 'twenties', value: 20 },
    { name: 'tens', value: 10 },
    { name: 'fives', value: 5 },
    { name: 'dollars', value: 1 },
    { name: 'quarters', value: .25 },
    { name: 'dimes', value: .10 },
    { name: 'nickels', value: .05 },
    { name: 'pennies', value: .01 }
];

var totalDue = document.getElementById('cost');
var amountGiven = document.getElementById('given');
var button = document.getElementById('button');
var notes = document.getElementById('notes');



button.onclick = function() {

    var changeDue = amountGiven.value - totalDue.value;

    changeDue = Math.round(changeDue * 100) / 100;

    var message = 'your change is $' + changeDue + '! This can be broken down as follows below;';

    var output = document.getElementById('output1');

    if (isNaN(amountGiven.value) || isNaN(totalDue.value) || changeDue <= -1) {
        alert('You owe me money!');

        return;
    }

    output.innerHTML = message;

    notes.innerHTML = '';

    for (var i = 0; i < denominations.length; i++) {
        var denomination = denominations[i];

        var tender = parseInt(changeDue / denomination.value);

        changeDue -= tender * denomination.value;

        changeDue = Math.round(changeDue * 100) / 100;

        var monies = document.createElement('p');

        monies.innerHTML = denomination.name + ' : ' + tender + '.';

        
        notes.appendChild(monies);

    }
}
