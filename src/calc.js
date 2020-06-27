function solve(){
var	firstNumber = parseFloat(document.getElementById("firstNumber").value);
var secondNumber =parseFloat(document.getElementById("secondNumber").value);
var select=document.getElementById("operation").value;
var res;
if(document.getElementById("firstNumber").value==""||document.getElementById("secondNumber").value==""){
res="One number input is empty";}
else if(firstNumber<-100||secondNumber<-100||firstNumber>100||secondNumber>100){
res="Number1 or Number2 is not in specified range: [-100, 100]";
}
else switch(select){
case "SUM" :
res=firstNumber+secondNumber;
break;

case "MULTIPLICATION" :
res=firstNumber*secondNumber;
break;

case "DIVISION" :
if(secondNumber==0){
                 res="Cannot divide by 0";
                 }else{
res=firstNumber/secondNumber;
}
break;
}
document.getElementById("result").innerHTML=res;
}

