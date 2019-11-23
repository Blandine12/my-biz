'use strict';

function doStuff() {
    var travellingTo = prompt('Where are you travelling to?');
    var howMuch = prompt('How much is the ticket?');
    var sale;
    
    if (howMuch > 1000.00) {
        sale = '5%!';
    } else if (howMuch > 800.00) {
        sale = '2%';
    } else if (howMuch > 100.00) {
        sale = '0%';
    }else{
        sale = 'nothing'
    }
    
    document.write( '<h3>' + sale + '</h3>');
}

doStuff();





