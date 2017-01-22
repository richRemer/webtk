const ready = require("../../../lib/ready");

ready(doc => {
    doc.getElementById("ready").textContent = "Document ready.";
});
