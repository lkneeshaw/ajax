// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// `load()` method
//$('#data').load('data/data.txt');

//$('#data').load('data/data.html');

//$('#data').load('data/data.json');

// Configure Airtable - Handshake

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyCYIL8w8qxlK7UU'}).base('appnoFkpdhB8Bf1aE');

// AJAX Call

base('Entertainers').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});