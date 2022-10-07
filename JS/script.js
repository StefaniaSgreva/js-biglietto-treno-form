"use strict"; 

const btn = document.getElementById('calculate');

const CalcTicketPrice = function (){
    let km = parseInt(document.getElementById('km').value); 
    let age = parseInt(document.getElementById('age').value); 
    console.log(km, age);




}

btn.addEventListener('click', CalcTicketPrice);