const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfdoc = new PDFDocument();
pdfdoc.pipe(fs.createWriteStream('document1.pdf'));
pdfdoc.text("Hello world of PDFKit");
pdfdoc.end();

//create pdf
//read contents of pdf -> NLA
//update pdf contents