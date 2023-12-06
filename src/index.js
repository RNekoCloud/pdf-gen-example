import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_font/";
import fs from "fs";
import { JSDOM } from "jsdom";
import htmlToPdfMake from "html-to-pdfmake";

const HTML = `
    <div>
        <h1>Hello world</h1>
    </div>
`;

const { window } = new JSDOM("");

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
  pdfDocGenerator.getBuffer(function (buffer) {
    fs.writeFileSync("companies.pdf", buffer);
  });
