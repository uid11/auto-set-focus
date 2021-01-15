import autoSetFocus from './index.js';

console.log('\x1b[33mRun tests for autoSetFocus...\x1b[0m');

const it = (name, test) => {
    test();
    console.log(`${name}:`, '\x1b[32mok\x1b[0m');
};

it('do not throw without element', () => {
    autoSetFocus();
});

it('add correct listener', () => {
    let count = 0;
    globalThis.addEventListener = (type, listener) => {
        listener({});
        count += 1;
    };

    autoSetFocus({ focus() {} });
    delete globalThis.autoSetFocus;

    if (count !== 1) throw new Error();
});

it('return correct dispose function', () => {
    const dispose = autoSetFocus({ focus() {} });

    dispose();
});
