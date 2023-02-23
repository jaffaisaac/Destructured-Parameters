function sum ([num1 , num2 =0]){

    console.log(num1 +num2 )
}
sum( [2,5]); //7
sum([9]); //9
sum([]) //NaN  (Not a Number )  because even though num2 defaults to 0, num1 is set to undefined.
sum() //TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))