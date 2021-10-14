let num1 = 2
let num2 = 3
let num3 = 4

if ( num1 > num2 ) 
console.log ('num1 is greater than num2 ')
else 
console.log ('num2 is greater than num1')

if ( num1 % 2 == 0) {
	console.log('Even Number');
}else {
	console.log('Odd Number');
}
if (num1>num2 && num1>num3)
{
        if (num2>num3)
        {
            console.log(num1 + ", " + num2 + ", " + num3);
        }
        else
        {
            console.log(num1 + ", " + num2 + ", " +num3);
        }
}
else if (num2>num1 && num2>num3)
{
        if (num1>num3)
        {
             console.log(num2 + ", " + num1 + ", " +num3);
        }
        else
        {
             console.log(num2 + ", " + num3+ ", " +num1);
        }
}
else if (num3>num1 && num3>num2)
{
        if (num1>num2)
        {
            console.log(num3 + ", " + num1 + ", " +num2);
        }
        else
        {
            console.log(num3 + ", " + num2 + ", " +num1);
        }
    }
        
let i = 0;
for (let i = 0; i <= 20; i++) {
console.log('Enter')
}

let x= 0
while (i <= 20) {
    console.log(x);
    x += 1;
}
for(let s= 1; i <= 20; i += 1){
    if(s % 2) 
    console.log(s) 
    }

for( let m=0; m <= 5 ; m +=1 ) {
console.log("*");
}
