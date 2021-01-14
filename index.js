let setFocus = (element = $0) => {
    if (!element || typeof element.focus !== 'function') {
        console.log('Not a control DOM element: ', element);
        return;
    }

    window.addEventListener('keydown', event => {
        if (typeof event.key !== 'string' || event.key.length !== 1) return;
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (document.hasFocus()) return;

        element.value = '';
        element.focus();
    });
};

export default setFocus;
