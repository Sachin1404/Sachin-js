// let arr=[0,1,2,3,4]
// console.log(arr.slice(1,3))
// console.log(arr)
// console.log(arr.splice(1,2))
// console.log(arr)
let arr1=[1,2,3,4]
let arr2=[4,5,6,7]
// let newarr=[...arr1,...arr2]
// console.log(newarr)
arr1.push(arr2)
console.log(arr1)
console.log(arr1.flat(1))