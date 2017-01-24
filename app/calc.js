const ready = require("../lib/ready");
const click = require("../lib/click");
const select = require("../lib/select");

ready(function() {
    var buttonsUi = this.getElementById("buttons"),
        totalUi = this.getElementById("display-total"),
        currentUi = this.getElementById("display-current"),
        operatorUi = this.getElementById("display-operator"),
        model = {total: 0, current: 0, op: "plus"};

    select(this, "#buttons .digit", button => {
        click(button, function() {
            var digit = Number(this.dataset.digit);
            model.current = model.current * 10 + digit;
            refresh();
        });
    });

    select(this, "#buttons .op", button => {
        click(button, function() {
            execute();
            model.op = button.dataset.op;
            refresh();
        });
    });

    function refresh() {
        totalUi.textContent = model.total;
        currentUi.textContent = model.current;
        operatorUi.textContent = model.op;
    }

    function execute() {
        if (model.op === "minus") model.total -= model.current;
        if (model.op === "plus") model.total += model.current;
        model.current = 0;
    }
});
