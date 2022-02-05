// let a="Dinesh is a good boy"
// console.log(a);

// console.log(a.indexOf("i"));
// console.log(a.lastIndexOf("o"))
// console.log(a.replace("D", "S"))
// console.log(a.substring(1,4))
// console.log(a.slice(3,8))

// Function to Calculate BMI 
 function calculate() {
  let W = document.getElementById('weight').value;
  let H = document.getElementById('height').value;
  
  let bmi = W /(H*H);
  
// Condition of Healthy and unhealthy 
if (bmi>=18.5 && bmi<=24.5){
  document.getElementById('info').innerHTML= "Your BMI is:" +" " +  bmi.toFixed(2) + "<br>" + "<b>You are healthy";
} else if(bmi>=24.5){
  document.getElementById('info').innerHTML= "Your BMI is:" +" "+  bmi.toFixed(2) +"<br>" + "<b>You are  overweight";
 }  else {
  document.getElementById('info').innerHTML= "Your BMI is:"+" " +  bmi.toFixed(2) +"<br>" + "<b>You are  Underweight";
}
 }//  function ends here


// Function For Reseting Data /Button
 function fun() {
   document.getElementById('myForm').reset();
 }