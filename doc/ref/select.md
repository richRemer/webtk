WebTK Reference: select
=======================
Query the DOM using CSS selector.

**`select(string) => Element[]`**  
**`select(object, string) => Element[]`**  
**`select([object,] string, function)`**  
**`select(object) => select`**  

The `select` function queries a DOM context object using a CSS selector, either
returning the selected elements or passing each selected element to a callback
function.  If a context object is passed to `select`, it must be a `Document` or
`Element`.  The global document is used when no other context is provided.  This
default context can be changed using the final form to return a new `select`
function.

**Full Example:** [select](../src/test/select.html)
