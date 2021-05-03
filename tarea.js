//example fibonacci sequence:
//1,1,2,3,5,8,13,21,34…
//you start of with 1 (or 0 and 1), the next number
// is 0+1 = 1; next number is 1+1= 2, and so on

function fibonacci(number){
    var first = 0;
    var second = 1;
    var newNumber = 0;
    for(i=0;i<=number;i++){
        newNumber = first + second;
        first = second;
        second = newNumber;
    }
    fibonacciNumber = second
    return fibonacciNumber
}

console.log(fibonacci(3));