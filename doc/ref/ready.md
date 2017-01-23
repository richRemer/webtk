WebTK Reference: ready
======================
The `ready` function binds a listener function to be called when the document is
ready.  The exported function is bound to the global document object, and can be
used to create new bindings to faciliate writing tests or working with multiple
documents, such as when using frames.  In any case, the document object is
passed to the listener when it is called.

The document is considered to be ready when its `DOMContentLoaded` event is
fired.  If the `DOMContentLoaded` event has already been fired when a listener
is added with the `ready` function, the listener will called when added by
scheduling an asynchronous call in 0 seconds.

### ready(Document) => ready
Create a new ready function which is bound to a document.

### ready(function)
Execute listener function when document is ready.

### ready(Document, function)
Execute listener function when provided document is ready.

Example
-------
```js
const webtk = require("webtk");
const ready = webtk.ready

ready(doc => {
    doc.getElementById("foo").value = 42;
});
```

**Demo:** [test case - ready](../src/test/ready.html)
