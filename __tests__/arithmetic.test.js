'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.js', () => {
    //add tests 

    it('add numbers should return number', ()=>{
        expect(arithmetic.add(1, 2)).toEqual(3);
    });
    it('Add should not have zero inputs', () => {
        expect(arithmetic.add()).toBeNull();
    });
    it('Add should not have only 1 input', () => {
        expect(arithmetic.add(1)).toBeNull();
    });
    it('add strings should fail', () => {
        expect(arithmetic.add('a', 2)).toBeNull();
    });
    it('add objects should fail', () => {
        expect(arithmetic.add({}, 2)).toBeNull();
    });
    it('add boolean should fail', () => {
        expect(arithmetic.subtract(true,1)).toBeNull();
    });


    //subtract tests
    it('subtract numbers should return number', ()=>{
        expect(arithmetic.subtract(3,1)).toEqual(2);
    });
    it('Subtract should not have zero inputs', () => {
        expect(arithmetic.subtract()).toBeNull();
    });
    it('Subtract should not have only 1 input', () => {
        expect(arithmetic.subtract(1)).toBeNull();
    });
    it('subtract strings should fail', () => {
        expect(arithmetic.subtract('a', 2)).toBeNull();
    });
    it('subtract objects should fail', () => {
        expect(arithmetic.subtract({}, 2)).toBeNull();
    });
    it('add boolean should fail', () => {
        expect(arithmetic.subtract(true,1)).toBeNull();
    });


    //multiply tests
    it('multiply should return a number', () => {
        expect(arithmetic.multiply(3,4)).toEqual(12);
    });
    it('multiply can not have zero inputs', () => { 
        expect(arithmetic.multiply()).toBeNull();
    });
    it('multiply strings should fail', () => {
        expect(arithmetic.multiply('a', 2)).toBeNull();
    });
    it('multiply objects should fail', () => {
        expect(arithmetic.multiply({}, 2)).toBeNull();
    });
    it('multiply boolean should fail', () => {
        expect(arithmetic.multiply(true,1)).toBeNull();
    });

    //divide tests
    it('divide should return a number', () => {
        expect(arithmetic.divide(12,4)).toEqual(3);
    });
    it('cannot divide by zero', ()=>{
        expect(arithmetic.divide(12,0)).toEqual(undefined);
    });
    it('divide can not have zero inputs', () => { 
        expect(arithmetic.divide()).toBeNull();
    });
    it('divide strings should fail', () => {
        expect(arithmetic.divide('a', 2)).toBeNull();
    });
    it('divide objects should fail', () => {
        expect(arithmetic.divide({}, 2)).toBeNull();
    });
    it('divide boolean should fail', () => {
        expect(arithmetic.divide(true,1)).toBeNull();
    });

    
});