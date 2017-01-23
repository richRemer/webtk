/**
 * Execute callback when document is ready.
 * @param {Document} [doc]
 * @returns {function}
 */
function ready(doc, callback) {
    if (arguments.length < 2) callback = doc, doc = document;
    callback = callback.bind(doc);

    switch (doc.readyState) {
        case "interactive":
        case "complete":
            setTimeout(callback, 0);
            break;
        default:
            doc.addEventListener("DOMContentLoaded", () => callback());
    }
};

module.exports = ready;
