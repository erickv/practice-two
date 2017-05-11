function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("I'm Erick.", "I'm a designer");
    document.getElementById("demo").innerHTML = res;