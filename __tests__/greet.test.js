'use strict';

const greet = require('../lib/greet.js');

describe ('greet.js', ()=> {
  it('Int should be null', ()=> {
    expect(greet(1)).toBeNull();
  });
  it('Arr should be null', ()=> {
    expect(greet([])).toBeNull();
  });
  it('Obj should be null', ()=> {
    expect(greet({})).toBeNull();
  });
  it('True should be null', ()=> {
    expect(greet(true)).toBeNull();
  });
  it('False should be null', ()=> {
    expect(greet(false)).toBeNull();
  });
  it('Undefined should be null', ()=> {
    expect(greet(undefined)).toBeNull();
  });

  it('should say hello world', () =>{
    let res = greet('world');
    expect(res).toEqual('Hello world');
  });
});
