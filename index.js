let setFocus = (element = $0) => {
    if (!element) {
        console.log('Element is falsy');
        return;
    }

    const hasCorrectFocus = () => document.hasFocus() && document.activeElement === element;

    window.addEventListener('keydown', () => {
        if (hasCorrectFocus()) {
            return;
        }

        element.value = '';
        element.focus();
    });
};

export default setFocus;
