let name=  "zubair"
let age = 23
let isStudent = false
let profile={
    name :"zubair",
    skills:["coding","learning"]
};
let hobbies = ["reading","coding"]

// console.log(profile.name);
// console.log(profile.skills);
// console.log(isStudent)

const number= 10;
if (number > 5)
{
    //  console.log("Greater than 5");
}
else{
    // console.log("5 or less ");
}

for (let i=0;i<5;i++){
    // console.log(`Iteration : ${i}`)
}


//Dom Manipulation
// const button = document.querySelector("button");
// button.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "blue";
// });

// Promises and Async/Await

const fetchData = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // console.error(data);


    } catch(error){

        // console.error("error fetching data :",error);
    }
};
fetchData();

// Events and Callbacks

document.querySelector("button").addEventListener("click",()=>{
    alert("button clicked");
})
