var numbers = [];
function onload() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    for (var i = 1; i <= 9; i++) {
        container.innerHTML += ('<div class="unit"><span class="unitsub"></span><span class="number">' + i + '</span></div>');
        numbers.push(i);
    }
}
function Shuffle() {
    var theLength = numbers.length - 1;
    var toSwap;
    var temp;

    for (var i = theLength; i > 0; i--) {
        toSwap = Math.floor(Math.random() * (i + 1));
        temp = numbers[i];
        numbers[i] = numbers[toSwap];
        numbers[toSwap] = temp;
    }

    i = 0;
    var units = document.getElementsByClassName("number");
    for (unit of units) {
        unit.innerHTML = numbers[i];
        i++;
    }
};

function Sort() {
    numbers.sort();
    i = 0;
    var units = document.getElementsByClassName("number");
    for (unit of units) {
        unit.innerHTML = numbers[i];
        i++;
    }
};