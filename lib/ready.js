/**
 * Execute callback when document is ready.
 * @param {Document} [doc]
 * @returns {function}
 */
function ready(doc, callback) {
    if (arguments.length < 2) callback = doc, doc = document;

    switch (doc.readyState) {
        case "interactive":
        case "complete":
            setTimeout(() => callback(doc), 0);
            break;
        default:
            doc.addEventListener("DOMContentLoaded", () => {
                callback(doc);
            });
    }
};

module.exports = ready;
