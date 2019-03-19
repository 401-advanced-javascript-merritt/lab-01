![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01

### Author: Chris Merritt

### Links and Resources
* [repo](https://github.com/401-advanced-javascript-merritt/lab-01) 


### Modules
#### `arithmatic.js, greet.js`
##### Exported Values and Methods

###### `arithmatic.add(a, b) -> a+b`
###### `arithmatic.subtract(a, b) -> a-b`
###### `arithmatic.multiply(a, b) -> a*b`
###### `arithmatic.divide(a, b) -> a/b`
Use to perform simple calculations.

###### `greet(name) -> returns 'Hello name`
Enter a string and receive a greeting. 


#### Running the app
* `node index.js`
Returns values for each of the functions.

  
#### Tests
* `npm test`
* arithmetic.test.js:
    Proper use should result in: 
        A number.
    Improper use should result in null for:
        Strings, zero input, only one input, objects, boolean.
    Improper use should result in undefined for:
        Divide by zero.
* greet.test.js:
    Proper use should result in:
        Hello + input.
    Improper use should return null for:
        Strings, numbers, objects, boolean, undefined.


