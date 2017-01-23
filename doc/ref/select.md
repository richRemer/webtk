WebTK Reference: select
=======================
The `select` function queries the DOM using CSS selectors.  It is a thin wrapper
around `Document.querySelector` and related functions.

### select(string) => Element[]
> Select elements from the default context using a CSS selector.  The default
> context of the default select function is the global document.

### select(object, string) => Element[]
> Select elements from a non-default context object, which must be a Document or
> Element instance.

### select(object) => select
> Create a select function with updated default context, which must be a
> Document or Element instance.

### select([object], string, function)
> Execute a callback for each selected element, passing the element to the
> callback.

Example
-------
```js
const webtk = require("webtk");
const ready = webtk.ready;
const select = webtk.select;

ready(() => {
    select(".default", elem => elem.style.fontWeight = "800");

    select(".important", elem => {
        select(elem, "p", elem => elem.style.color = "red");
    });
});
```

**Full Example:** [select](../src/test/select.html)
