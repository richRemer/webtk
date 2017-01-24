/**
 * Create ready function.
 * @param {Document} defaultDocument
 * @returns {function}
 */
function createReady(defaultDocument) {
    /**
     * Execute callback when document is ready.
     * @param {Document} [doc]
     * @param {function} callback
     * @returns {function}
     */
    return function ready(doc, callback) {
        if (arguments.length === 1 && typeof doc === "object") {
            return createReady(doc);
        } else if (arguments.length === 1 && typeof doc === "function") {
            callback = doc;
            doc = defaultDocument || document;
        }

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
}

module.exports = createReady();
