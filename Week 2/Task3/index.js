var json2xls = require('json2xls');
var file  = require('fs-extra');
var products = require('./products.json'); 

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


products.forEach(element => {
    //console.log(element)
    element.dateUpdated =new Date().toLocaleString("en-US", {timeZone: "America/New_York"})

    element.price = formatNumber(element.price)
});

var xls = json2xls(products);

file.writeFileSync('products.xlsx', xls, 'binary');