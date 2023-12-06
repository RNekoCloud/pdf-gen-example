const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
const htmlToPdfMake = require("html-to-pdfmake");

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const HTML = `
    <div>
        <h1>Hello world</h1>
    </div>
`;


const html = htmlToPdfMake(HTML, {
    window
});

const docDefinition = {
    content: [html],
    // pageOrientation: "landscape",
    styles: {
      "html-h1": {
        color: "#003366",
        background: "white",
      },
    },
  };
  
  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.getBuffer((buffer) => {
    fs.writeFileSync("hello.pdf", buffer);
  });
