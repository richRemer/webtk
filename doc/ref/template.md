WebTK Reference: template
=========================
Create **template** from a DOM `<template>` element.

> `template(string) => function`  
> `template(object, string) => function`  
> `template([object,] string, function) => function`  
> `template(object) => template`  

The `template` function generates a **template** based on a DOM `<template>`.
This resulting **template** can be called to generate a `DocumentFragment` or a
string which can be injected into the DOM.  When the resulting **template** is
called, an `Element` or `Document` context object is searched using a string to
identify the DOM `<template>` *id* attribute.  This context object defaults to
the global document.  Pass a single context object argument to the `template`
function to get back an updated `template` with different default context.

If a function is passed to the `template` function, the resulting **template**
will pass the extracted `<template>` element `DocumentFragment` to the function
before returning the result, along with any additional arguments that are passed
to the **template**.

**Full Example:** [template](../src/test/template.html)
