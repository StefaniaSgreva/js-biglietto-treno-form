"use strict"; 

const btn = document.getElementById('calculate');

const CalcTicketPrice = function (){
    let km = document.getElementById('km').value; 
    let age = document.getElementById('age').value; 
    console.log(km, age);




}

btn.addEventListener('click', CalcTicketPrice);