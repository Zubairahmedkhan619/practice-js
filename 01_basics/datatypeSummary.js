// memory two types: stack(primitive) & heap (non)
// stack mem will do changes in  copy and return copy value not original 

// in heap the value are changes and return orinal changed values


// ....string................................................................

const name="zubair"
const repoCount=50

// console.log(name+repoCount+"value")
console.log(`hello iam ${name} and the repo count is ${repoCount} `)


const gameName = new String("zubair")
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4));

 const balance=new Number(100)
//  console.log(balance.toString())
 console.log(typeof balance);


 //precision value
 const otherNumber=23.9866
 console.log(otherNumber.toPrecision(3))

 //

 const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'))



//math

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));