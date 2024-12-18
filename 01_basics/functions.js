function sayMyname(){
    console.log("z");
    console.log("u");
    console.log("b");
    console.log("a");
    console.log("i");
    console.log("r");
}
//sayMyname()


//...... add numbber using function.....
function addTwoNumbers(number1,number2){
    let result =number1+number2
    return result

}

const result=addTwoNumbers(5,8)
// console.log("result : ", result);
 

// fun 2 (...name) rest or spread operater
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(500,250,700))

// const user ={
//     username:'zubair',
//     price:120

// }
// function handleObject(anyobject){
//     //console.log(`username is ${ anyobject.username } and price is ${anyobject.price}`);
// }
// handleObject(user);


//....function passing array  .....

const myNewArray=[200,400,500,600]
function returnsecondvalue(getarray){
    return getarray[2]
}

// console.log(returnsecondvalue(myNewArray));
// console.log(returnsecondvalue([200,500,800,550]));

//......blog scope and global scope....
let a=300
if(true){
    let a=20
    const b=50
    // blog prnts only value of a=20 as inside this  blog
    //console.log("inner if : ",a);
}
//print the global scope as a=300
//console.log("outer:",a);

// ##### ARROW FUNCTIONS ####


const user ={
    username: 'zubair',
    price:254,
    welcomeMessage : function(){
        //console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage()

const chai =function  (){
    let username ="hitesh"
   // console.log(this.username);
}
chai()


(function chai (name){
    console.log(`db connected ${name}`);
    
})('zubair')