WebTK Reference: template
=========================
The `template` function creates a template from a DOM `<template>` element.  A
template is a function which returns a string, `Element`, or `DocumentFragment`,
which can be injected into the document.

### template(string) => function
> Create template that selects a `<template>` element from the default context,
> clones it as a `DocumentFragment`, and returns the result.  The default
> context of the default template function is the global document.

### template(object, string) => function
> Create template that selects a `<template>` element from a non-default
> context.

### template(object) => template
> Create a template function with updated default context, which must be a
> Document or Element instance.

### template([object], string, function)
> Create template which accepts a model argument.  When template is called, the
> cloned `DocumentFragment` and model are passed to the provided bind function
> before being returned.

Example
-------
```js
const webtk = require("webtk");
const template = webtk.template;

const itemTemplate = template("item", (view, model) => {
    Object.keys(model).forEach(key => {
        view.querySelectorAll(`.${key}).forEach(elem => {
            elem.textContent = model[key];
        });
    });
});
```

**Full Example:** [template](../src/test/template.html)
