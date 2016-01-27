function Calculator() {

    this.total = 0;

    this.add = function (val) {
        this.total += val;
    }

    this.subtract = function (val) {
        this.total -= val;
    }

    this.getTotal = function () {
        return this.total;
    }
}

var calc = new Calculator();
calc.add(50)
calc.subtract(10)
console.log(calc.getTotal());
