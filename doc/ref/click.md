WebTK Reference: click
======================
The `click` function binds a listener function to be called when an element is
clicked.  The listener is executed with `this` set to the clicked element.

### click(Element, function)
> Execute listener function when an element is clicked.

Example
-------
```js
const webtk = require("webtk");
const ready = webtk.ready;
const click = webtk.click;

function logname() {
    console.log("Name:", this.name);
}

ready(() => {
    const button = document.getElementById("my-button");

    click(button, () => {
        // do button-y things
    });
});
```

**Demo:** [test case - click](../src/test/click.html)
