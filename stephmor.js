let age = prompt("how old are you");

if (age == 18) {
    alert("can drive small car");
}
else if (age > 18 && age <= 24){
    alert("you can drive a big car");
}
else if (age > 24){
    alert("you can drive a truck!");
}
else {
    alert(" you are too young to drive a vehicle");
}

