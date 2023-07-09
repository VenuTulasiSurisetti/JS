var a = 7;
var b = "7";
console.log(!(a >= 10));

var c = b * ++a;

var e = 7;
e += c;
var d = c / b;

document.write(c);

console.time();
document.write("<br>d is", d);
document.write("<br>e is", e, "<br>");
console.log([1, 2, 3, 4]);
console.table([1, 2, 3, 4]);
console.error("something went wrong");
console.warn("This is warning");
console.timeEnd();
//console.clear();

var ageweGotis=35;
var enteredNumber =prompt(" Enter a number less than 100 To login: ");
if(enteredNumber<=100){
     ageweGotis=AgeUpdation();

     switch (true) {
        case (ageweGotis >= 11 && ageweGotis <= 20):
          document.write(" student is between 11-20 Age !");
          break;
        case (ageweGotis >= 21 && ageweGotis <= 30):
          document.write(" student is between 21-30 Age !");
          break;
        case (ageweGotis >= 31 && ageweGotis <= 40):
          document.write(" student is between 31-40 age !");
          break;
    }
}
else {
    alert("Login Failed !")
}
function AgeUpdation(){
    var customerAge= 35;
    var ageConfirmation=confirm("Hello your age is "+ customerAge )
    if (ageConfirmation===false){
       var customerAge=prompt("Enter Your Age : ")
        document.write(" Your age is " + customerAge);
        var age=5;
        
    }
    else {
        alert("Your Age Got updated !")
    }
    return customerAge;
}

  