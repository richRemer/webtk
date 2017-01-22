/**
 * Execute callback when element is clicked.
 * @param {Element} elem
 * @param {function} callback
 */
function click(elem, callback) {
    elem.addEventListener("click", () => {
        callback.call(elem);
    });
}

module.exports = click;
