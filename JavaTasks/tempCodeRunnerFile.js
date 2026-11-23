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
    else 30+(distance-2)*!5
}

const checkFreeDelivery= (orderAmount)=>{
    if(orderAmount>=1000) return true
    else return false
}
const processOrder= (customer, distance, orderAmount,callback)=>{
    if(checkFreeDelivery(orderAmount)===false){
        let delivery = callback(distance)
    }else{
        delivery = 0;
    }
    console.log("Customer: "+customer);
    console.log("Order Amount: "+ orderAmount);
    console.log("Distance: "+ distance+" km");
    console.log("Delivery Charge: Rs. "+ delivery );
}
processOrder("shyam", 5, 800, calculateDelivery);