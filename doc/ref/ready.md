WebTK Reference: ready
======================
Call function when document is ready.

> `ready(function)`  
> `ready(Document, function)`  
> `ready(Document) => ready`  

The `ready` function adds a listener which is called called when a document
`DOMContentLoaded` event is fired, or immediately if the event has already
fired.  This provides a mechanism for safely adding DOM initialization.  The
global document is used if none is provided.  The default document can be
changed using the final form to return a new `ready` function.

**Full Example:** [ready](../src/test/ready.html)
