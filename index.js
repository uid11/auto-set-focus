const autoSetFocus = (element = typeof $0 !== 'undefined' && $0) => {
    if (!element || typeof element.focus !== 'function') {
        globalThis.console?.log?.('Not a control DOM element:', element);

        return () => {};
    }

    const typeReg = /^(pa|te|da|em|nu|se|ti|ur)/;

    const hasFocus = () => {
        const { readOnly, type } = globalThis?.document?.activeElement ?? {};

        return readOnly !== true && typeReg.test(type);
    };

    const listener = event => {
        if (typeof event.key !== 'string' || event.key.length !== 1) return;
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (hasFocus()) return;

        element.value = '';
        element.focus();
    };

    globalThis.addEventListener?.('keydown', listener);

    return () => globalThis.removeEventListener?.('keydown', listener);
};

export default autoSetFocus;
