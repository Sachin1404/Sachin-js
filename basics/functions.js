// function add2numbers(number1,number2){
//     return number1+number2
// }
// let sum=add2numbers(4,5)
// // console.log(sum)
// const user={
//     name:"Sachin",
//     age:18,
//     user_id:"sachin.js"
// }
// function Print_User_Details(obj){
//     console.log(obj.user_id)
// }
// Print_User_Details(user)
const add=(num1,num2)=>(num1+num2)
console.log(add(5,3));
//IEFE(immediately invoked function expression)
(
 function print(){
        console.log(`mene aaj pua banaya`)
    }
)()