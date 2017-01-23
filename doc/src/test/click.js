const ready = require("../../../lib/ready");
const click = require("../../../lib/click");

ready(() => {
    const target = document.getElementById("target");
    const trigger = document.getElementById("trigger");

    click(trigger, () => {
        target.textContent = "Activated";
        trigger.style.display = "none";
    });
});
