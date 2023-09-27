// const user = {
//     username : "Abhijeet",
//     price : 999,

//     wellcomeMessage: function(){
//         console.log(`Wellcome ${this.username} Your payment of ${this.price}`);
//     }
// }
// user.wellcomeMessage()

// user.username="Vishal" 
// user.wellcomeMessage()

// console.log(this) //Here this is out of scope hence it give empty/no result but in browser it give Window as a result

// function dhudh(){
//     let username = "Abhijeet"
//     console.log(this.username) //You can't use "this" under a function
// }
// dhudh()
// const Ghee = () => {
//     let username = "vishal"
//     console.log(this)
// }
// Ghee()

// const add = (num1,num2) =>{
//     return num1 + num2 ;
// }
// console.log(add(6,7))


// const add = (num1,num2) =>( num1 + num2) ; //Implicit technique no need to return and {}
const add = (num1,num2) =>({user : "abhijeet"}) 

console.log(add(6,7))




