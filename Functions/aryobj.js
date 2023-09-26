function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(220,420,1999,500))
//"..." REST is used for wrapping in an array for passing multiple valuse in a Function.Spread is also represented by it
/*const winner = {
    user:"Abhijeet singh",
    money:100000 
}*/
function username(anyobject){
    console.log(`Dear ${anyobject.user} your account has been crideted by ${anyobject.money} Thanks`);
}
//username(winner) //Note :- Passing the object is mandatory 
username({
    user:"vishal",
    money: 1000000 
})

const mynewarray=[199,3999,40000,1000000]

function pricelist(getArray){
    return getArray[0]
}
console.log(pricelist(mynewarray))