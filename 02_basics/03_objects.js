//  Singleton

// object literals
const jsUser = {
    name: "manish",
    age: 19,
    location: "bbsr",
    email: "manish@gsoc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email) not recommended to use 
console.log(jsUser["lastLoginDays"])


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log("manish kumar jha ");
