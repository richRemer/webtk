WebTK Reference: ready
======================
Call function when document is ready.

> `ready(function)`  
> `ready(Document, function)`  
> `ready(Document) => ready`  

The `ready` function executes a callback when a document's `DOMContentLoaded`
event fires, or immediately if the `DOMContentLoaded` event has already fired.
Inside the callback, `this` refers to the document.  The default document is
the global document.  Pass a single document argument to the `ready` function
to get back an updated `ready` with a different default document.

**Full Example:** [ready](../src/test/ready.html)
