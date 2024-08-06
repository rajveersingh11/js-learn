function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
    
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1+number2  
}
const result = addTwoNumbers(4,9)
// console.log("Result:", result);

function loginUserMessage(username = "Pihu"){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rajveer"));
// console.log(loginUserMessage());

function calculatCarPrice(val1,val2,...num1){
    return num1
}
// console.log(calculatCarPrice(200,300,900));

const user = {
    username: "rajveer",
    price: 199999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "pihu",
    price: 299999
})

const myNewArray = [200,500,800,3000]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));





