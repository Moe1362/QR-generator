# QR-generator
QR-Generator
# Introduction

This is a simple Node.js application that generates a QR code image from a user-provided URL using the inquirer, qr-image, and fs modules.

# Installation
Make sure you have Node.js installed on your machine.

Clone this repository or download the files to your local machine.

Navigate to the directory where you saved the files using the terminal.

Install the required dependencies .

# Usage
Run the application by executing the following command in your terminal:

 node index.js

You will be prompted to enter the URL you would like to convert to a QR code.

After entering the URL, the application will generate a QR code image (qr_img.png) containing the provided URL and save it in the current directory.

Additionally, the URL will be saved to a text file (url.txt) in the current directory.

# Dependencies

inquirer: A collection of common interactive command line user interfaces.
qr-image: A QR code generator for Node.js.
fs: The Node.js file system module for reading and writing files.


# License

This project is licensed under the MIT License - see the LICENSE file for details.