const ready = require("../../../lib/ready");

ready(function() {
    this.getElementById("target").textContent = "Document is ready";
});
