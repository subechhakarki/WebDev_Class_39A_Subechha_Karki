// q1 1. Shopping Discount
// • Task: Calculate the final price of an item based on a
// purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount

let price = 80;
if(price>=100){
    console.log("cost = "+ (price+price*0.20))
}
else if(price>=50 || price<=99.99 ){
    console.log("cost = "+ (price+ price*0.10))
}
else{ console.log("cost = "+ price)

}

// q2 Time-Based Greeting
// • Task: Given an hour variable (in 24-hour format, 0–23), log:
// • "Good morning" for hours 5 through 11
// • "Good afternoon" for hours 12 through 17
// • "Good evening" for all other hours
let time = 23;
if(time>=5 && time<=11){
     console.log("Good Morning");
}
else if(time>=12 && time<=17){
     console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}

 // q3 Leap Year Checker
// • Task: Determine if a given year is a leap year.
// • Rule: A year is a leap year if it is divisible by 4 and not
// divisible by 100, or if it is divisible by 400
let year = 1998;
if ((year % 4===0 && (year % 100!==0)) || (year % 400 === 0)){
    console.log("it is a leap year");
}
else {
    console.log("It is not a leap year")
}

// q4 Login & Role Check
// • Task: Create two variables: isLoggedIn (boolean) and role
// (e.g., "admin", "editor", "guest").
// • If not logged in, log "Please log in".
// • If logged in and role === "admin", log "Welcome,
// Admin".
// • If logged in with any other role, log "Welcome, User".
let loggedin = true;
let role = "admin";
if (loggedin === true){
    if(role === "admin" ){
    console.log("Welcome Admin!")}
    else{
        console.log("Welcome User")
    }
}
else{
     console.log("Please log in")
}

//q5 Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max().
let a=12;
let b=23;
let c=67;
if(a>b && a>c){
    console.log("a is the largest")
}
else if (b>a && b>c){
    console.log("b is the largest")
}
else{
    console.log("c is the largest")
}