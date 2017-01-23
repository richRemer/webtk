const ready = require("../lib/ready");
const click = require("../lib/click");

ready(function() {
    var buttonsUi = this.getElementById("buttons"),
        totalUi = this.getElementById("display-total"),
        currentUi = this.getElementById("display-current"),
        operatorUi = this.getElementById("display-operator"),
        model = {total: 0, current: 0, op: "+"};

    this.querySelectorAll("#buttons .digit").forEach(button => {
        click(button, function() {
            var digit = Number(this.dataset.digit);
            model.current = model.current * 10 + digit;
            refresh();
        });
    });

    this.querySelectorAll("#buttons .op[data-op='minus']").forEach(button => {
        click(button, function() {
            if (model.op === "-") model.total -= model.current;
            if (model.op === "+") model.total += model.current;
            model.current = 0;
            model.op = "-";
            refresh();
        });
    });

    this.querySelectorAll("#buttons .op[data-op='plus']").forEach(button => {
        click(button, function() {
            if (model.op === "-") model.total -= model.current;
            if (model.op === "+") model.total += model.current;
            model.current = 0;
            model.op = "+";
            refresh();
        });
    });

    function refresh() {
        totalUi.textContent = model.total;
        currentUi.textContent = model.current;
        operatorUi.textContent = model.op;
    }
});
