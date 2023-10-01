//for of 
const arr = [1,2,3,4,5]

// for(const iterator of object)
for(const num of arr){
  //  console.log(num);
}

const greetings = "My Love Bharat"

for(const yourlove of greetings){
    // console.log(`who is your love ${greetings}`);
  }

//Maps => is colloection of key-value-pair 
 const map = new Map()
 map.set('IN',"India")
 map.set('USA',"United States of America")
 map.set('FR',"France")

 console.log(map);

 for( const [key,value] of map){
    console.log(`The Country Code ${key}`)
 }

