var Calculator = {

    total: 0,
    add: function (val) {
        this.total += val;
    },
    subtract: function (val) {
        this.total -= val;
    },
    getTotal: function () {
        return this.total;
    }
}


Calculator.add(50);
Calculator.subtract(10);
console.log(Calculator.getTotal());
