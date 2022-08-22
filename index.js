function receivesAFunction(callback){
    return callback();
  }
  let spy = ()=> "chai";
console.log(receivesAFunction(spy));


// part 2;

const returnsANamedFunction = function(){
    return ( function test() {
        console.log (`This is a named function!`);
    });
}
const fn = returnsANamedFunction();
console.log(fn);

//part 3

const returnsAnAnonymousFunction = function(){
    return (function(){
        console.log('this is a anonymous function')
    })
} 
const fn2 = returnsAnAnonymousFunction();
console.log(fn2);