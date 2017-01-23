const ready = require("../../../lib/ready");

ready(() => {
    document.getElementById("target").textContent = "Document is ready";
});
