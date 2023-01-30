let numberOne =  Number(prompt("Indique el número 1"));
let numberTwo =  Number(prompt("Indique el número 2"));
let numberthree = Number(prompt("Indique el número 3"));

if(numberOne===numberTwo && numberTwo===numberthree){
    console.log("Los números son iguales");
}

else if(numberOne>numberTwo && numberTwo>numberthree){
    console.log(numberOne,numberTwo,numberthree);
    console.log(numberthree,numberTwo,numberOne);
}

else if(numberTwo>numberOne && numberOne>numberthree || numberTwo===numberOne){
    console.log(numberTwo,numberOne,numberthree);
    console.log(numberthree,numberOne,numberTwo);
}
else if(numberthree>numberOne && numberOne>numberTwo || numberthree===numberOne){
    console.log(numberthree,numberOne,numberTwo);
    console.log(numberTwo,numberOne,numberthree);
}
else if(numberthree>numberTwo && numberTwo>numberOne || numberthree===numberTwo){
    console.log(numberthree,numberTwo,numberOne);
    console.log(numberOne,numberTwo,numberthree);
}
if(numberTwo>numberthree&&numberthree>numberOne){
    console.log(numberTwo,numberthree,numberOne);
    console.log(numberOne,numberTwo,numberthree);
}

