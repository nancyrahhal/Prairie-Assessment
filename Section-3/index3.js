let user_input=prompt("Enter a number please");
let output="";
let isPrime=true;



for(let i=2; i<=user_input;i++){
   isPrime=true;
    for(let j=2; j<=user_input;j++){
    if(user_input%j==0){
        isPrime=false;
    }
     
}   isPrime=true;
}

if(isPrime){
        output+=i+" ";
    }
alert(`the prime numbers are: ${output}`);