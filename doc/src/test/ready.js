const ready = require("../../../lib/ready");

ready(doc => {
    document.getElementById("target").textContent = "Document is ready";
});
