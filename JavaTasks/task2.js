// q1
let price = 80;
if(price>=100){
    console.log("cost = "+ (price+price*0.20))
}
else if(price>=50 || price<=99.99 ){
    console.log("cost = "+ (price+ price*0.10))
}
else{ console.log("cost = "+ price)

}

// q2
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

 // q3
let year = 1998;
if ((year % 4===0 && (year % 100!==0)) || (year % 400 === 0)){
    console.log("it is a leap year");
}
else {
    console.log("It is not a leap year")
}

// q4
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

//q5
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