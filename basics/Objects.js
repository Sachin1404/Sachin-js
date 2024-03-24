const sym=Symbol("key1")
console.log(sym)
const employee={
    name:"Dolly",
    age:27,
    salary:50000,
    DOB:new Date(1998,10,19),
    weakness:"badmash",
    [sym]:"key2"
}
console.log(employee["name"])
console.log(employee["DOB"].toDateString())
console.log(typeof employee[sym])
employee.greeting=function(){
    console.log(`Hello,how are you ${employee.name}`)
}
console.log(employee.greeting())