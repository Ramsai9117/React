console.log("manoj")
//console.log('manoj')
console.log(56)
console.log(false)
const a=10
console.log(a)
{
    const b=20
console.log(20)
}
{
  const c=20
console.log(c)
}
console.log('===================')
let d=50
console.log(d)
d="subu"
console.log(d)
d=50.3
console.log(d)
d=true
console.log(d)
d=false
console.log(d)
console.log('===================')
var b=50
console.log(b)
b="subu"
console.log(b)
b=50.3
console.log(b)
b=true
console.log(b)
b=false
console.log(b)
console.log('===================')
let i=0
do{
  console.log(i)
  i++
}while(i<=5)
console.log('===================')
let j=0
do{
  console.log(j)
  j++
}while(j<5)
    console.log('==========array=========')
    let arr=[10,200,"roy",20.20,50]
    console.log(arr)
    for (let x of arr){
        console.log(x)
    }
    console.log('=========object==========')
    let obj={
        "key":"value",
        "name":"manoj",
        "age":101,
        "city":"hyd"
    }
    for(let x in obj){
        console.log(x)
        console.log(x+":"+obj[x]);
    }