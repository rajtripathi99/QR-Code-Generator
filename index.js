import qr from "qr-image";
import inquirer from 'inquirer';
import fs, { writeFile } from "fs";

inquirer
    .prompt([
        { message: "Type your URL: ", name: "URL" }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr-img.png'));
        fs.writeFile("URL.txt", url, (err)=>{
            if (err) throw err;
            console.log("Your QR is Generated!");
        })
    });