# auto-set-focus

[![Contributor Covenant][contributor-covenant-image]](CODE_OF_CONDUCT.md)
[![code style: prettier][prettier-image]](https://github.com/prettier/prettier)
[![Conventional Commits][conventional-commits-image]](https://conventionalcommits.org)
[![No dependencies][dependencies-none-image]](package.json)
[![License MIT][license-image]](LICENSE)

Browser script for auto-setting focus on some element on page.

The index file exports the `autoSetFocus` function as a default value.

When called, the `autoSetFocus(element)` function adds a `keydown` event handler
and a `visibilitychange` event handler.

Then, each time a key is pressed on the page, this `keydown` handler checks
which element on the page has focus.

If the focus is on some control for entering text, the handler does nothing.
Otherwise (when neither text input element has focus),
the handler clears the text in the element field, and places the focus on element.

The `visibilitychange` handler place the focus on element, when user return on
the page from other windows or tabs.

Finally, `autoSetFocus(element)` returns a `dispose` function that, when called,
removes the `keypdown` and `visibilitychange` handlers:

```js
const dispose = autoSetFocus(someInputElement);

// ...

// later, when you need to dispose auto-set-focus
dispose();
```

## License

[MIT](LICENSE)

[contributor-covenant-image]: https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg 'Contributor Covenant'
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg 'Conventional Commits'
[dependencies-none-image]: https://img.shields.io/badge/dependencies-none-brightgreen 'No dependencies'
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg 'The MIT License'
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg 'Prettier code style'
