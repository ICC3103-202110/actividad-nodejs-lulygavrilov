//example fibonacci sequence:
//0,1,1,2,3,5,8,13,21,34…
//I can notice two base conditions for 0 and 1, 
//on position two de adittion beggins:
//0+1 = 1; next number is 1+1= 2, and so on

//But looping is discouraged in functional programming, 
//so I should see to do it using recursion.

function fibonacci(number){
    if(number == 0 | number ==1){
        return parseInt(number);
    }
    else{
        return fibonacci(number -1) + fibonacci(number-2);
    }
}

//Question^ Could've I used the function 'switch' 
//with cases and default?

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('[Enter position for Nº in Fibonacci]:', number => {
    console.log(fibonacci(number));
    readline.close();
  });