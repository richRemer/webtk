WebTK Reference: ready
======================
Call function when document is ready.

> `ready(function)`  
> `ready(Document, function)`  
> `ready(Document) => ready`  

The `ready` function adds a listener which is called called when a document
`DOMContentLoaded` event is fired, or immediately if the event has already
fired.  This provides a mechanism for safely adding DOM initialization.  The
global document is used if none is provided.

If `ready` is called with just a document argument, an updated `ready` function
will be returned with an updated default document.

**Full Example:** [ready](../src/test/ready.html)
