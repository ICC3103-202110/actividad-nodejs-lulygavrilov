//example fibonacci sequence:
//0,1,1,2,3,5,8,13,21,34…
//you start off with 0 and 1, the next number
// is 0+1 = 1; next number is 1+1= 2, and so on

//But looping is discouraged in functional programming, 
//so I should see to do it using recursion.


function fibonacci(number){
    switch(number){
        case 0:
            return number;
            break
        case 1:
            return number;
            break
        default:
            return fibonacci(number -1) + fibonacci(number-2);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Please enter a number:', number => {
    console.log(fibonacci(number));
    readline.close();
  });