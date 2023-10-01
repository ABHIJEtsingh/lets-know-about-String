const isUserloggedIn = true 
const temprature = 41

if(temprature === 41){                      //strict check for type and value
    console.log("Less than 50");
}
else{
    console.log("temp greater then 50");
}

if( temprature == 41) console.log("Implicit scope ");

// Nullish Coalescing Operator (??) : null undefined

let val;
val = 5??10
val = null ?? 10 

console.log(val); 