import parse from '../../lib';

function parserMacro(assert, input, expected) {
    assert.deepEqual(parse(input).cljsAst, expected);
}

export default parserMacro;