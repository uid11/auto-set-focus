/**
 * Switch on auto-setting focus to element when typing on keyboard.
 * @param {HTMLInputElement | HTMLTextAreaElement} element - element where focus will be setted.
 * @returns {() => void} - stop-function, that stop auto-setting of focus.
 */
const autoSetFocus = (element = typeof $0 !== 'undefined' && $0) => {
    if (!element || typeof element.focus !== 'function') {
        globalThis.console?.log?.('Not a control DOM element:', element);

        return () => {};
    }

    const typeReg = /^(pa|te|da|em|nu|se|ti|ur)/;

    const hasFocus = () => {
        const { readOnly, type } = globalThis.document?.activeElement ?? {};

        return readOnly !== true && typeReg.test(type);
    };

    const focus = () => {
        element.value = '';
        element.focus();
    };

    const visibilityListener = () => {
        if (globalThis.document?.hidden === false) focus();
    };

    const keyListener = event => {
        if (typeof event.key !== 'string' || event.key.length !== 1) return;
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (hasFocus()) return;

        focus();
    };

    globalThis.addEventListener?.('keydown', keyListener);
    globalThis.document?.addEventListener?.('visibilitychange', visibilityListener);

    return () => {
        globalThis.removeEventListener?.('keydown', keyListener);
        globalThis.removeEventListener?.('visibilitychange', visibilityListener);
    };
};

export default autoSetFocus;
