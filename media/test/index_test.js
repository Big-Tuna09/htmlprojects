const assert = require('assert')

describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3+4 === 7);
  });
});

describe('firstPart', () => {
  it('returns a string', () => {
    firstPart();
    
    assert.ok(typeof firstPart() === 'string')
  })

  it('sets a number from arr', () => {
    assert.ok( typeof time === 'number')
  })
})

describe('insertMsg', () => {
    it('returns three different strings and changes font-color', () => {
        assert.ok( typeof returnMsg() === 'string' )
    })
})