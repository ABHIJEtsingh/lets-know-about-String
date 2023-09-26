function WhatIsFunction(){
    console.log("To");
    console.log("Reapet");
    console.log("All");
    console.log("The");
    console.log("Code");
    console.log("Under");
    console.log("The Curli");
    console.log("brackets");

}
//WhatIsFunction()
// WhatIsFunction this is Only reference

function addTwoNumber(number1,number2) //this is parameter//
{
    const a=number1+number2;
   // console.log("Result:",a);
}
addTwoNumber(2,3) //We Passed Values as an  Argument 
addTwoNumber(2,"3") //Js Understand Both as a string ("Concatinaion")

function UserLogin(username){
    if(username===undefined){
        console.log("Please Enter username")
        return 
    }
    return `${username} just logged in`
}
console.log(UserLogin());



