WebTK Reference: ready
======================
Call function when document is ready.

**`ready(function)`**  
**`ready(Document, function)`**
**`ready(Document) => ready`**

The `ready` function adds a listener which is called called when a document
`DOMContentLoaded` event is fired, or immediately if the event has already
fired.  This provides a mechanism for safely adding DOM initialization.  The
global document is used if none is provided.  The default document can be
changed using the final form to return a new `ready` function.

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
