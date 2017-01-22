const ready = require("../../../lib/ready");
const click = require("../../../lib/click");

ready(doc => {
    const readyState = doc.getElementById("basics-ready-state");
    const clickButton = doc.getElementById("basics-click-button");
    const clickState = doc.getElementById("basics-click-state");

    readyState.textContent = "Executed";

    click(clickButton, () => {
        clickState.textContent = "Executed";
        clickButton.style.display = "none";
    });
});
