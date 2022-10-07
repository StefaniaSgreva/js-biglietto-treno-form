"use strict"; 

const btn = document.getElementById('calculate');

const CalcTicketPrice = function (){
    let km = parseInt(document.getElementById('km').value); 
    let age = parseInt(document.getElementById('age').value); 
    console.log(km, age);

    const costPerKm = 0.21;
    let ticketCost = costPerKm * km;
    console.log(ticketCost);

    const underage = ticketCost / 100 * 80;
    const over = ticketCost / 100 * 60;

    console.log(underage, over);

    let correctPriceAdult = ticketCost.toFixed(2);
    let correctPriceUnderage = underage.toFixed(2);
    let correctPriceOver = over.toFixed(2);
    console.log(correctPriceAdult, correctPriceUnderage, correctPriceOver);  

    if ((age >= 18) && (age <= 65)){
        console.log(correctPriceAdult);
        // const element = document.getElementById('ticket-price').innerHTML = correctPriceAdult;
    } else if (age < 18){
        console.log(correctPriceUnderage);
        // const element = document.getElementById('ticket-price').innerHTML = correctPriceUnderage += '<div style="color: #b31b1a; font-size: 16px;">Hai ricevuto uno sconto del 20%</div>';
    } else if (age > 65) {
        console.log(correctPriceOver);
        // const element = document.getElementById('ticket-price').innerHTML = correctPriceOver += '<div style="color: #b31b1a; font-size: 16px;">Hai ricevuto uno sconto del 40%</div>';
    }

}

btn.addEventListener('click', CalcTicketPrice);