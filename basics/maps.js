const map=new Map()
map.set(1,"a")
map.set(2,"b")
map.set(3,"c")
map.set(4,"d")
// for (const [key,value] of map) {
//     console.log(key ,":-" ,value)
// }
const arrobj=[
    {
        name:"sachin",
        age:19
    },
    {
        name:"dolly",
        age:26
    }
]
const numarr=[1,2,3,4,5]
const initialval=0
const sum=numarr.reduce(
    (accumulator,currentval)=>accumulator+currentval,initialval
)
console.log(sum)

// function newFunction() {
//     arrobj.forEach((element) => {
//         console.log(element.name)
//     })
// }
