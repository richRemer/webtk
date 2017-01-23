const ready = require("../../../lib/ready");
const click = require("../../../lib/click");

ready(function() {
    const target = this.getElementById("target");
    const trigger = this.getElementById("trigger");

    click(trigger, () => {
        target.textContent = "Activated";
        trigger.style.display = "none";
    });
});
