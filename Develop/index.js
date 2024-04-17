//this is the import for the inquirer and qr-imafe and fs
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//this is the prompt for the user to enter the URL they would like to convert to a QR code  
inquirer.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL you would like to convert to a QR code:'
    }

])
//this is the promise that will take the URL and convert it to a QR code and save it as a png file
.then(answers => {
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
//this is the promise that will take the URL and save it as a txt file
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
