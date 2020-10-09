// Topic 11 Function

// hello();

// function hello(){
//     alert("Hello World :) ");
// }
// Parameter Function

sum(10, 20);
sum(20, 30);
sum(100, 100);

function sum(a , b){
    // var a = 10;
    // var b = 20;
    var add = a + b
    document.write("The sum of two no. is "+add+"<br>");
}

document.write("<br>");
// return keyword
var stored = sum(10, 20);

document.write("The sum of two no. is "+stored+"<br>");

function sum(a , b){

    var add = a + b
    return add;    
}