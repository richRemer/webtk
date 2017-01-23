WebTK Reference: ready
======================
The `ready` function binds a listener function to be called when the document is
ready.  The listener is executed with the document set to `this`, and will be
called even if the document is ready when the listener is added.

The document becomes ready when its `DOMContentLoaded` event has fired.  The
listener will be immediately scheduled to execute if the event has already fired
when the listener is added.

### ready(function)
> Add listener to default document.  The default document of the default ready
> function is the global document.

### ready(Document, function)
> Add listener to non-default document.

### ready(Document) => ready
> Create a ready function with updated default document.

Example
-------
```js
const webtk = require("webtk");
const ready = webtk.ready;

ready(() => {
    document.getElementById("foo").value = 42;
});
```

**Full Example:** [ready](../src/test/ready.html)
