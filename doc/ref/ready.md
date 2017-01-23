WebTK Reference: ready
======================
The `ready` function binds a listener function to be called when the document is
ready.  The listener is executed with the document set to `this`, and will be
called even if the document is ready when the listener is added.

The document becomes ready when its `DOMContentLoaded` event has fired.  The
listener will be immediately scheduled to execute if the event has already fired
when the listener is added.

### ready(Document) => ready
> Create a ready function which uses a document other than the global one.

### ready(function)
> Execute listener function when document is ready.

### ready(Document, function)
> Execute listener function when a document is ready.

Example
-------
```js
const webtk = require("webtk");
const ready = webtk.ready;

ready(() => {
    const document = this;
    document.getElementById("foo").value = 42;
});
```

**Demo:** [test case - ready](../src/test/ready.html)
