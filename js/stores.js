'use strict';

(function(module) {

    var stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3',
        key: 'pike'
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '1.2',
        key: 'seatac'    
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        avg: '3.7',
        key: 'seattercenter'    
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2.3',
        key: 'caphill'    
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        avg: '4.6',
        key: 'Alki'    
    }];

    
    for(let i = 0; i < stores.length; i++) {
        stores[i].customers = [];
        for(let j = 0; j < 14; j++) {
            var min = Math.ceil(parseInt(stores[i].min));
            var max = Math.floor(parseInt(stores[i].max));
            var customersThisHour = Math.floor(Math.random() * (max - min)) + min;
            stores[i].customers.push(customersThisHour);
        }
    }

    for(let i = 0; i < stores.length; i++) {
        stores[i].macaronsPerHour = [];
        for(let j = 0; j < 14; j++) {
            var macaronsThisHour = Math.ceil((parseFloat(stores[i].customers[j])) * (parseFloat(stores[i].avg)));
            stores[i].macaronsPerHour.push(macaronsThisHour);
        }
    }

    for(let i = 0; i < stores.length; i++) {
        stores[i].storeTotals = [];
        var storeTotal = totally(stores[i].macaronsPerHour);
        stores[i].storeTotals.push(storeTotal);
    }

    module.stores = stores;
    
    var totals = [];
    for(var i = 0; i < 14; i++) {
        var total = 0;

        for(var j = 0; j < stores.length; j++) {
            total += stores[j].macaronsPerHour[i];
        }
        totals.push(total);
    }

    var grandTotal = totally(totals);

    function totally(totals) {
        var grandTotal = 0;
        for(var j = 0; j < 14; j++) {
            grandTotal += totals[j];
        } 
        return grandTotal;
    }
    
    module.totals = {
        name: 'Totals',
        macaronsPerHour: totals,
        storeTotals: grandTotal
    };
    console.log(module.totals);

})(window.module = window.module || {});