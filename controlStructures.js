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


let amount= 10;
const amount = 10;
if (amount < 0) {
    console.log("Please enter a positive number")
  } else 
  { if(amount != 10 ) 
    console.log(typeof amount)
    console.log("Please enter a number")
  } else {
      console.log(10);
}

  











let username="Shatha"
let password="113355"
if(username.length>6 && password.length>=8){
    console.log("login successful")
}
else  {
    console.log("login failed")
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


   {  let startRange=5;
    let endRange=8;
    let arr=[];
    {
        for ( f=startRange ; startRange<=endRange ; f++ ) {
            arr.push(f)
    }
    console.log(arr)
    
    } }

 {
for( let m=0; m <= 5 ; m +=1 ) {
console.log("*");
} }