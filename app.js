function Calculator() {

    var total = 0;

    var add = function (val) {
        total += val;
    }

    this.subtract = function (val) {
        total -= val;
    }

    this.getTotal = function () {
        return total;
    }

    return {
        add: add
    }
}

var calc = new Calculator();
calc.add(50);
calc.subtract(10);
console.log(calc.getTotal());
console.log(calc.total);
