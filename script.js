//Author Cephas


//QUESTION 1
/*This add between two numbers*/
function add(numA, numB){
    return numA + numB;
}

//QUESTION 2
/*This checks between two numbers and return true or false*/
function checkNum(num1, num2){
    if (num2 > num1) {
        return true;
    } else if(num1 == num2) {
        return equal;
    }
    else{
        return false
    }
}

//QUESTION 3
//This prints out 4 strings into an array
function Array(a,b,c,d) {
    var first = a;
    var second = b;
    var third = c;
    var fourth = d;
    return ["1st word:"+first, "2nd word:"+second, "3rd word:"+third, "4th word:"+fourth];
}

//QUESTION 4
/*This function converts minutes to hours*/
function minutes(num){
   var hr = "Hours"
   var min = 60;
   var hours = num/min;
   return hours+ "" +hr;
}

//QUESTION 5
/* This calculates Perimeter and Area of a circle given Radius*/
function pie(radius) {

        var pie = 22 / 7;
        var rx = Math.pow(radius,2); 
        var area = pie*rx; 
        var perimeter = 2 * pie * radius;

        return ["Perimeter is:"+perimeter, "Area is:"+area];
        }


//QUESTION 6
/*This converts miles to km when unit is miles, km to miles when unit is kms*/
function convert(num, unit) {

    
    if (unit == "miles") {
        var x = num*1.60934;
        return x + " Kilometers";
    }

    else if (unit == "kms") {
        var y = num * 0.621371;
        return y+ " miles";
    }

    else{
        var o = "Wrong unit, hint: use kms or miles";
        return o;
    }
}

///question 7

 function BMI(kg,M){                         /*This function  calculates the 
                                             The BMI*/
     var o = Math.pow(M,2);
     var bm = kg / o;

     return "Body Mass Index is: "+ bm;
 }

//QUESTION 8

function date(num) {                      //This returns current date and month
    var x = new Date();
    var y = x.getDate();

    return x;
}

//QUESTION 9


function palindrome(word) {  //This function checks if a given word is a palindrome or not

  var a = word;
  var b = a.split("");       //This splits a string to an array
  var c = b.reverse();       //That array is then reversed
  var d = c.join("");        //Then its joined again to be a String
  
  

  if (d == word) {                     
      var x = "is a Palindrome"
      return d +" "+x;
  } else {
      var y = "is not a Palindrome"
      return d +" "+y;
  }
}
 



//QUESTION 10
function calculator(num1,op,num2) { 

    /*Addition*/                                  ///This function takes in two numbers and an operator
    if (op == "+") {                             ///It will process the number based on the operator
        var a = num1 + num2;                    ///assigned between them.
        return a +" :Addition";
    }
    /*Subtraction*/
    else if (op == "-"){
        var b = num1 - num2;
        return b +" :Subtraction";
    }
    /*Multiplication*/
    else if (op == "*") {
        var c = num1 * num2;
        return c +" :Multiplication";
    }
    /*Division*/
    else if (op == "/") {
        var d = num1 / num2;
        return d +" :Division";
    }
    else {
        var e = "Calculator doesnt support this operation";
        return e;
    }
}





