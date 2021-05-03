//example fibonacci sequence:
//0,1,1,2,3,5,8,13,21,34…
//you start off with 0 and 1, the next number
// is 0+1 = 1; next number is 1+1= 2, and so on

//But looping is discouraged in functional programming, 
//so I should see to do it using recursion.
function main(){
    var number = parseInt(readLine(),10);
    fibonacci(number);
}

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
