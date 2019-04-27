var file  = require('fs-extra');
var isToday = require('date-fns')
// With a callback:
var formatDistance = require('date-fns/formatDistance')

var eoLocale = require('date-fns/locale/vi')

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var products = []

file.readJson('./products.json', (err, productsArray = []) => {
    if (err) console.error(err)
  
    console.log('Total element: ' +productsArray.length) // => 0.1.3
    
    products = [...productsArray]

    productsArray.forEach(element => {
        //console.log(element)
        element.dateUpdated =new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
        //console.log('After update: ' + element.dateUpdated)
        var result = formatDistance(new Date( element.dateUpdated), new Date(2019, 2, 15), {locale:eoLocale})
        console.log(`${element.name} - ${formatNumber(element.price)}VND - Cập nhật cách đây ${result}`)
    });

})
