
// const tinderUser = new Object() this is a singleton object 

const tinderUser = {} // this is not a singleton boject literal



tinderUser.id = "23bcee25"
tinderUser.name = "Sammy"


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}



// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor) 
