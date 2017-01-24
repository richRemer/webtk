const ready = require("../lib/ready");
const click = require("../lib/click");
const select = require("../lib/select");

ready(() => {
    var buttonsUi = document.getElementById("buttons"),
        totalUi = document.getElementById("display-total"),
        currentUi = document.getElementById("display-current"),
        operatorUi = document.getElementById("display-operator"),
        model = {total: 0, current: 0, op: "plus"};

    select("#buttons .digit", button => {
        click(button, () => {
            model.current = model.current * 10 + Number(button.dataset.digit);
            refresh();
        });
    });

    select("#buttons .op", button => {
        click(button, () => {
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
