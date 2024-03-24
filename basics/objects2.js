const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"b",
}
const obj3={obj1,obj2};
console.log(obj3);
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
const obj5={...obj1,...obj2}
console.log(obj5)