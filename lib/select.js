/**
 * Create select function.
 * @param {Document|Element} defaultContext
 * @returns {function}
 */
function createSelect(defaultContext) {
    /**
     * Query DOM elements using CSS selector.
     * @param {Document|Element} [context]
     * @param {string} selector
     * @param {function} [callback]
     * @returns {Element[]}
     */
    return function select(context, selector, callback) {
        var elems;

        if (typeof context === "string") {
            callback = selector;
            selector = context;
            context = null;
        } else if (arguments.length === 1) {
            return createSelect(context);
        }

        context = context || defaultContext || document;
        elems = context.querySelectorAll(selector);

        if (typeof callback === "function") {
            elems.forEach(elem => callback(elem));
        } else {
            return Array.from(elems);
        }
    };
}

module.exports = createSelect();
