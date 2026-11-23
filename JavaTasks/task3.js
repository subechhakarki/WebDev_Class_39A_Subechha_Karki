//Note: Question 5 and 9 cannot run together

// Question 1: Smart Electricity Bill Calculator
const calculateBill = (units) => {
    let serviceFee= 50;
    let fee;
    if (units<= 20) fee = units*5;
    else if(units <= 50) fee = 20*5 + ((units-20)* 7);
    else fee = 20*5 + (30* 7)+ ((units-50)* 10) ;
    
    return serviceFee+fee;
}

const displayBill = (name, units, callback)=>{
    console.log("Customer: "+name);
    console.log("Units Consumed: "+units);
    console.log("Total Electricity Bill: Rs. "+ callback(units));
}

displayBill("Ram", 65, calculateBill);


// Question 2: Student Result Processing System

const calculateAverage = (m1, m2, m3) =>{
    let sum = m1+m2+m3; 
    return sum/3;
}

const getDivision = (average) =>{
    if (average>=70) return "Frist Division";
    else if (average>=60) return "Second Division";
    else if (average>=50) return "Third Division";
    else return "Fail";
}

const processResult = (name, m1, m2, m3, callback) =>{
    let average = calculateAverage(m1, m2, m3);
    let division = callback(average);
    console.log("Student: "+name);
    console.log("Average: "+average);
    console.log("Division: "+ division);

}

processResult("Sita", 88,89,55, getDivision);



// Question 3: Online Shopping Discount System
const calculateDiscount =(amount)=>{
    if(amount >= 5000) return 20;
    else if(amount>=3000) return 15;
    else if(amount>=1000) return 10;
    else return 0;
}

const calculateFinalPrice = (amount, discount)=>{
    let totalAmount = amount - amount*(discount/100);
    return totalAmount;
}

const checkout = (customerName, amount, callback)=>{
    let discount = calculateDiscount(amount);
    let totalAmount = callback(amount, discount);
    console.log("Customer: "+customerName);
    console.log("Original Price: Rs. "+ amount);
    console.log("Discount: "+ discount +"%");
    console.log("Final Price: Rs. "+ totalAmount);
}
checkout("Nikesh", 6000, calculateFinalPrice);


//Question 4: Movie Ticket Booking System

const getTicketPrice=(age)=>{
    if(age<12) return 150
    else if(age>=12 && age<=17) return 200
    else if(age>=18 && age<=59) return 300
    else return 200
}

const calculateTotal=(price, quantity)=>{
    return price*quantity;
}

const applyDiscount=(total, quantity)=>{
    if(quantity>=5) return total*0.1;
    else return 0;
}

const bookTicket=(name, age, quantity, callback)=>{
    let price = getTicketPrice(age);
    let total = calculateTotal(price, quantity);
    let discount = callback(total, quantity);
    let finalAmount = total-discount;
    console.log("Customer: "+name);
    console.log("Age: "+age);
    console.log("Tickets: "+quantity);
    console.log("Total Before Discount: "+total);
    console.log("Discount: Rs. " + discount);
    console.log("Final Amount: Rs. " + finalAmount);
}

bookTicket("Hari", 25, 5, applyDiscount);



//Question 5: Employee Salary Processing System
const calculateBonus= (salary)=>{
    if(salary>=40000) return salary*0.1
    else return salary*0.05
}
const calculateTax= (salary)=>{
    return salary*0.05;
}
const calculateNetSalary=(salary,bonusCallback,taxCallback)=>{
    let bonus= bonusCallback(salary);
    let tax = taxCallback(salary);
    let netsalary = salary + bonus - tax;
    return {bonus: bonus, tax: tax, netsalary: netsalary};
}
const generatePayslip=(name, salary, callback)=>{
    let result = callback(salary, calculateBonus, calculateTax);

    console.log("Employee: " + name);
    console.log("Basic Salary: Rs. " + salary);
    console.log("Bonus: Rs. " + result.bonus);
    console.log("Tax: Rs. " + result.tax);
    console.log("Net Salary: Rs. " + result.netsalary);
}
generatePayslip("Ram", 50000, calculateNetSalary);


//Question 6: Food Delivery Charge Calculator
const calculateDelivery= (distance)=>{
    if(distance<=2) return 30
    else return 30+(distance-2)*5
}

const checkFreeDelivery= (orderAmount)=>{
    if(orderAmount>=1000) return true
    else return false
}
const processOrder= (customer, distance, orderAmount,callback)=>{
    let delivery;
    if(checkFreeDelivery(orderAmount)===false){
        delivery = callback(distance)
    }else{
        delivery = 0;
    }
    console.log("Customer: "+customer);
    console.log("Order Amount: "+ orderAmount);
    console.log("Distance: "+ distance+" km");
    console.log("Delivery Charge: Rs. "+ delivery );
}
processOrder("shyam", 5, 800, calculateDelivery);

//Question 7: ATM Withdrawal System

const validateWithdrawal = (amount, balance) => {
    if (amount > balance) return "Insufficient balance!";
    else if (amount % 500 !== 0) return "Withdrawal amount must be a multiple of Rs. 500!";
    else if (amount <= 0) return "Invalid withdrawal amount!"
    else if (amount + 25 > balance) return "Insufficient balance to cover transaction fee!";
    else return true;
    
};

const withdrawMoney = (amount, balance, callback) => {
    let validation = callback(amount, balance);
    if (validation === true) {
        balance = balance - amount - 25;
        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Error: " + validation);
    }
    console.log("Remaining Balance: Rs. " + balance);
};

withdrawMoney(3000, 10000, validateWithdrawal);


// Question 8: Restaurant Order Management System

const getFoodPrice = (foodName) => {
    if (foodName === "Burger") return 250;
    else if (foodName === "Pizza") return 500;
    else if (foodName === "Momo") return 150;
    else if (foodName === "Chowmein") return 180;
    else return -1;
}

const calculateServiceCharge = (total) => {
    return total * 0.05;
}

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === -1) return -1;

    let foodAmount = price * quantity;
    let serviceCharge = callback(foodAmount);
    let finalAmount = foodAmount + serviceCharge;

    return [foodAmount, serviceCharge, finalAmount];
}

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let result = callback(foodName, quantity, calculateServiceCharge);

    if (result === -1) {
        console.log("Invalid food item!");
    }
    else {
        console.log("Customer: " + customerName);
        console.log("Food: " + foodName);
        console.log("Quantity: " + quantity);
        console.log("Food Amount: Rs. " + result[0]);
        console.log("Service Charge: Rs. " + result[1]);
        console.log("Final Amount: Rs. " + result[2]);
    }
}

generateReceipt("Suman", "Burger", 2, calculateOrder);


//Question 9: Mobile Recharge System
const calculateBonus=(amount)=>{
    if(amount>=1000) return 0.15*amount
    else if(amount>=500) return 0.10*amount
    else if(amount>=100) return 0.05*amount
    else return 0
}

const calculateTotalBalance= (amount, bonus)=>{
    return amount + bonus;
}

const recharge=(number, amount, callback)=>{
    let bonus = calculateBonus(amount);
    let total= callback(amount, bonus);
    console.log("Mobile Number: "+number);
    console.log("Recharge Amount: Rs. "+amount);
    console.log("Bonus Received: Rs. "+bonus);
    console.log("Total Balance: Rs. "+total);
}

recharge(980000000, 10000, calculateTotalBalance);


// Question 10: Smart Function Based Calculator
const add=(a,b)=>{
    return `Addition: ${a} + ${b} = ${a+b}`;
}
const substraction=(a,b)=>{
    return `Subtraction: ${a} - ${b} = ${a-b}`;
}
const multiply=(a,b)=>{
    return `Multiplication: ${a} * ${b} = ${a*b}`;
}
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero!";
    return `Division: ${a} / ${b} = ${a / b}`;
};
const calculate = (a, b, operationCallback) => {
    console.log( operationCallback(a, b));
};

calculate(20, 10, add); 