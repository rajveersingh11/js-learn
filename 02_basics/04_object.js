// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "john@google.in",
    fullname: {
        userfullname: {
            firstname: "Rajveer Singh",
            lastname: "Shekhawat"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "q", 2: "w"}
const obj2 = {3: "q", 4: "w"}
const obj3 = {5: "q", 6: "w"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign(obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rajveer"
}

course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "rajveer",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]