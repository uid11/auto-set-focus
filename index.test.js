import autoSetFocus from './index.js';

console.log('\x1b[33m Run tests for autoSetFocus\n\x1b[0m');

const it = (name, test) => {
    try {
        test();
        console.log(`\n\x1b[1m${name}\x1b[0m -> \x1b[32m ok\x1b[0m`);
    } catch (error) {
        console.log(`\n\x1b[1m${name}\x1b[0m -> \x1b[31m fail\x1b[0m\n${error}`);
    }
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

    if (count !== 1) throw new Error(`Expect 1, but got ${count}`);
});

it('return correct dispose function', () => {
    const dispose = autoSetFocus({ focus() {} });

    dispose();
});
