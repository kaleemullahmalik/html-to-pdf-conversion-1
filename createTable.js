const fs = require("fs");

// JSON data
const data = require("./data.json");
// Build paths
const { buildPathHtml } = require("./buildPaths");
// console.log(data[0].accountnumber);
// var string = '{"key":"234", "key":"234"}';
// var output = JSON.stringify(string);
// console.log(output);
// var output1 = JSON.parse(data[0]);
var output = JSON.stringify(data[0]);
console.log(output);
var counter = 0;
for (var i = 0; i < data.length; i++) {
  console.log(data[i].accountnumber + " ");
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var today = new Date();
const monthIndex = today.getMonth();
const monthName = months[monthIndex];
var date =
  today.getDate() +
  " " +
  monthName +
  " " +
  today
    .getFullYear()
    .toString()
    .substr(-2);

/**
 * Take an object which has the following model
 * @param {Object} item
 * @model
 * {
 * "accountnumber": `Number`,
 * }
 *
 * @returns {String}
 */

const createRow = item => `
    ${item.accountnumber}
  
`;

/**
 * @description Generates an `html` table with all the table rows
 * @param {String} rows
 * @returns {String}
 */
const createTable = rows => `
    ${rows}
  
`;

/**
 * @description Generate an `html` page with a populated table
 * @param {String} html
 * @returns {String}
 */

const createHtml = html => `
  <!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="stylesheet.css"/>
   
    <title>Email Template</title>
    <style>
        
      .header {
        overflow-x:auto;
        width: 100%;
        border-collapse: collapse;
       
        
        margin: 0 auto;
         }
      .headerlogo {
        width: 50%;
        margin-top:35px;
        margin-bottom:40px;
        background-color:#007dc5;
     
      }
      .headerstatement {
        
        width: 50%;
        
        background-color:#007dc5;
      
    }

      .nav1 {
           width: 140px;
        height: 43px;
        background-color: #e6e7e9
      }
      .nav2 {
            width: 140px;
        height: 43px;
        background-color: #e6e7e9
      }
      .nav3 {
         
        width: 780px;
        height: 43px;
        background-color: #e6e7e9
      }
      .nav4 {
         
        width: 399px;
        height: 43px;
        background-color: #e6e7e9
      }
      .nav5 {
          
        width: 199px;
        
        height: 43px;
        background-color: #e6e7e9
      }
      .footer1 {
           width: 400px;
        height: 38px;
        background-color: #e6e7e9
      }
      .footer2 {
         width: 30%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .logos
      {
       
        width: 4%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .text{
       
        width: 12%;
        background-color: #e6e7e9;
        height: 15px;
      }
      .emptydiv{
       
        width: 20%;
        background-color: #e6e7e9;
        height: 15px;
      }
    </style>
  </head>
  <body>
    <table class="header">
      <tr > 
        <td class="headerlogo">
        <img style="margin-left:56px;margin-top:25px;margin-bottom:25px; " src="Email template logos/ubllogo/ublLogo@3x.png" />
        </td>
        <td class="headerstatement" style="text-align:right;">
        <h3 style="margin-right:65px; font-size:15px; font-size:19px; color:#ffffff; font-family: aspiraregular;">Account Statement</h3>
        <p style="margin-right:65px; margin-top:-15px; font-size:11px; color:#ffffff; font-family: aspiraregular;">Printed on <strong> ${date} </strong> </p>
        </td>
      </tr>
    </table>

    <table class="header">
      <tr>
        <td class="nav1">
        
        </td>
        <td class="nav2"></td>
        <td class="nav3" style="text-align:right;">
          <p style="font-family: aspiraregular; color:  #000000; font-size: 11px;  ">Account number: <strong>${data[0].accountnumber}</strong></p>
        
        </td>
        <td class="nav4" style="text-align:right;">  <p style="font-family: aspiraregular; color:  #000000; font-size: 11px;  "><b style="margin-right: 5px;">|</b> ${date} - ${date}  </p>
        </td>
        <td class="nav5" style="text-align:right;">  <p style="font-family: aspiraregular; color:  #000000; font-size: 11px; margin-right:65px;   "><b style="margin-right: 5px;">|</b> page  ${data[0].page}</p>
        </td>
      </tr>
    </table>

    <table class="header">
      <tr>
        
        <td style="width: 580px ">
          <p style="font-family: aspiraregular;  color: #000000; font-size: 19px; font-weight: bold;padding-left: 56px; ">Tania Khan</p>
          <p style="font-family: aspiraregular;  color:#2e2e2e;font-size: 12px;padding-left: 56px; ">Office # 5, Third floor, Fazal Arcade, </p>
          <p style="font-family: aspiraregular;  color:#2e2e2e;  font-size: 12px;padding-left: 56px; margin-top:-10px  ">F11 Markaz,Islamabad</p>
        </td>
        <td style="width: 100px;  ">
        <p style=" margin-left=80px;   height:70px;   "></p>
         
        </td>
        
        <td  style="width:335px; margin-right:60px">
          <p style=" margin-right:60px; font-family: aspiraregular; color:  #000000; font-size: 11px; padding-top: 50px;  padding-left: 15px; ">Balance: <strong>2000000.00</strong></p>
          <p style="font-family: aspiraregular; color: #000000; font-size: 11px; margin-top:-8px; margin-right:60px; padding-left: 15px; ">As of: <strong>${date}</strong></p>
          
          <p style="font-family: aspiraregular; color: #000000; font-size: 11px; margin-top:-8px; margin-right:60px; padding-left: 15px; ">Account Type: <strong>UBL Current Account</strong></p>
          
          <p style="font-family: aspiraregular; color: #000000; font-size: 11px; margin-top:-8px;  margin-right:60px; padding-left: 15px; ">Currency: <strong>Pakistani Rupee</strong></p>
          
   
    
    </td>
      </tr>
    </table>

    <table class="header">
      <tr>
        <td style="width: 580px">
          <p style=" margin-left:56px; margin-top:-35px;font-family: aspiraregular; color:#000000; font-size: 11px;  ">${data[0].text} </p>
        <p style=" margin-left:56px;font-family: aspiraregular; color:#000000; font-size: 9px; ">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </td>
        <td style="width: 100px;  ">
        <p style=" margin-left=80px;  height:70px;   "></p>
         
        </td>
        
        <td style="width:320px; margin-top:50px; ">
          <p style="font-family: aspiraregular; margin-right:60px; color:  #000000; font-size: 11px;  padding-left: 15px; ">Reg Cell No: <strong>12345678998765</strong></p>
          <p style="  font-family: aspiraregular; margin-right:60px; color: #000000; margin-top:-8px; font-size: 11px; padding-left: 15px; ">IBAN No: <strong>PK 49 UNIL 12345678998765</strong></p>
          
          <p style="  font-family: aspiraregular; margin-right:60px; color: #000000; font-size: 11px; margin-top:-8px; padding-left: 15px; ">CIF: <strong>0123456789</strong></p>
          
          <p style=" font-family: aspiraregular; margin-right:60px; color: #000000; font-size: 11px; margin-top:-8px; padding-left: 15px; ">Branch: <strong>islamabad</strong></p>
        <p style=" font-family: aspiraregular; margin-right:60px; color: #000000; font-size: 11px; margin-top:-8px; padding-left: 15px; ">Branch Code: <strong>AB-0123</strong></p>
         
        
        </td>
      </tr>
    </table>

    <table class="header">
    
      <tr>
        <td style="width: 1000px">
          <p style=" font-family: aspiraregular; font-size: 19px; color: #000000; font-weight: bold; padding-left: 56px; ">Activity Summary</p>
          <p style=" border-bottom:3px solid black; margin-top:4px; margin-left:56px; margin-right:60px;  "></p>
       
          </td>
      </tr>
    </table>

    <table class="header" style="margin-top:-20px;">
   
      
      <th style="width: 100px;   text-align: left;   ">
        <p style="color:#000000; margin-left:56px;    font-family: aspiraregular; font-size: 12px;  color: #000000; font-weight: bold;  ">DATE</p>
        <p style=" border-bottom:1px solid black; border-collapse: collapse; margin-top:4px; margin-left:56px;   "></p>
      
      </th>
      
      <th style="width: 355px;text-align: left;   ">
        <p style="color:#000000; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight: bold;  ">PARTICULARS</p>
      <p style=" border-bottom:1px solid black; margin-top:4px; border-collapse: collapse; "></p>
      
      </th>
      <th style="width: 145px; text-align: left;   ">
        <p style="color:#000000; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight: bold;  ">INST. NO</p>
        <p style=" border-bottom:1px solid black; margin-top:4px; border-collapse: collapse; "></p>
      
      </th>
      <th style="width: 94px; text-align: right;   ">
        <p style="color:#000000; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight: bold;  ">DEBIT</p>
      <p style=" border-bottom:1px solid black; margin-top:4px; border-collapse: collapse; "></p>
      
      </th>
      <th style="width: 163px; text-align: right;   ">
        <p style="color:#000000; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight: bold;  ">CREDIT</p>
      <p style=" border-bottom:1px solid black; margin-top:4px; border-collapse: collapse;  "></p>
      
      </th>
      <th style="width: 180px; text-align: right;   ">
        <p style="color:#000000; margin-right:60px; font-family: aspiraregular; font-size: 12px; color: #000000; font-weight: bold;   ">BALANCE</p>
      <p style=" border-bottom:1px solid black; margin-top:4px; margin-right:60px;border-collapse: collapse; "></p>
      
      </th>
      
      <tbody>
        <tr>
        
          <td style="width: 150px">
            <p style="color:#000000;  margin-left:56px;  font-family: aspiraregular; font-size: 11px; color: #000000;   ">01-JAN-2019</p>
          </td>
          <td style="width: 355px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">OPENING BALANCE</p>
          
          </td>
          <td style="width: 145px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">123456789</p>
          </td>
          <td style="width: 94px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 163px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 180px">
            <p style="color:#000000; margin-right:60px; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;    ">2000000.00</p>
          </td>
       
        </tr>
        <tr>
        
          <td style="width: 150px">
            <p style="color:#000000;  margin-left:56px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">01-JAN-2019</p>
          </td>
          <td style="width: 355px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">OPENING BALANCE</p>
          
          </td>
          <td style="width: 145px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">123456789</p>
          </td>
          <td style="width: 94px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 163px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 180px">
            <p style="color:#000000; margin-right:60px; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;    ">2000000.00</p>
          </td>
          
        </tr>
        <tr>
        
          <td style="width: 150px">
            <p style="color:#000000;  margin-left:56px; font-family: aspiraregular; font-size: 11px; color: #000000;   ">01-JAN-2019</p>
          </td>
          <td style="width: 355px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">OPENING BALANCE</p>
          
          </td>
          <td style="width: 145px">
            <p style="color:#000000; text-align: left; font-family: aspiraregular; font-size: 11px; color: #000000;   ">123456789</p>
          </td>
          <td style="width: 94px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 163px">
            <p style="color:#000000; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;   ">2000000.00</p>
          </td>
          <td style="width: 180px">
            <p style="color:#000000; margin-right:60px; font-family: aspiraregular; text-align: right; font-size: 11px; color: #000000;    ">2000000.00</p>
          </td>
          
      
        </tr>
        <td style="  ">
        <p style="   height:50px;   "></p>
         
        </td>
      </tbody>
    </table>

      <table class="header">
        <tr>
        
          
          <td class="footer1"  style="font-family: aspiraregular; font-size: 11px; color: #000000;padding-left:56px">
          <p > <strong>For latest schedule of charges,Kindly visist your branch or UBL website www.ubl digital.com </strong></p>
          </td>
          <td class="footer2" style=" font-family: aspiraregular; padding-top:25px;  font-size: 11px; color: #000000;text-align:right; padding-right:65px">
          <p> <strong>www.ubldigital.com </strong></p>
          <p style="margin-top:-11px"> <strong>111-825-888 </strong></p>
          </td>
        </tr>
      </table>
      <table class="header">
      <tr>
        <td  style="width:0.5%;background-color: #e6e7e9;" >
        <img style="margin-left:56px; width:13px; height:13px"  src="Email template logos/facebook/combinedShape@3x.png" alt=""/>
        </td>
        <td  style="width:4%;font-family: aspiraregular;background-color: #e6e7e9;font-size: 9px; color: #000000;">
        <p style="padding-left:px">UBLUnitedBankLtd</p>
        </td>
        <td class="" style="width:0.5%;background-color: #e6e7e9;">
        <img  style=" width:13px; height:13px" src="Email template logos/twitter/combinedShape@3x.png" alt=""/>
      
        </td>
        <td class="" style=" width:4%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
          <p style="">ubldigital</p>
     
        </td>
        <td class="" style="width:0.5%;background-color: #e6e7e9;" >
        <img style=" width:13px; height:13px" src="Email template logos/linkedin/fill1@3x.png" alt=""/>
      </td>
        <td class="text" style=" width:4%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
          <p style="margin-left:">ubldigital</p>
     </td>
        <td class="" style="width:0.5%;background-color: #e6e7e9;" >
        <img style=" width:13px; height:13px"src="Email template logos/instagram/group2@3x.png" alt=""/>
      </td>
        <td class="text" style=" width:8%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
          <p style="margin-left:">United-Bank-Limited</p>
     </td>
        <td class="" style="width:0.5%;background-color: #e6e7e9;">
        <img style=" width:13px; height:13px" src="Email template logos/youtube/CombinedShape@3x.png" alt=""/>
      </td>
        <td class="text" style="width:3%; background-color: #e6e7e9;font-family: aspiraregular;font-size: 9px; color: #000000;">
          <p style="margin-left:">ubldigital</p>
     </td>
        <td class="emptydiv"></td>
        
      
      
      </tr>
    </table>
    </table>
  </body>
</html>
`;

/**
 * @description this method takes in a path as a string & returns true/false
 * as to if the specified file path exists in the system or not.
 * @param {String} filePath
 * @returns {Boolean}
 */
// const doesFileExist = filePath => {
//   try {
//     fs.statSync(filePath); // get information of the specified file path.
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

try {
  /* Check if the file for `html` build exists in system or not */
  // if (doesFileExist(buildPathHtml)) {
  //   // console.log("Deleting old build file");
  //   /* If the file exists delete the file from system */
  //   // fs.unlinkSync(buildPathHtml);
  // }
  /* generate rows */
  const rows = data.map(createRow).join("");
  /* generate table */
  const table = createTable(rows);
  /* generate html */
  const html = createHtml(table);
  /* write the generated html to file */
  fs.writeFileSync(buildPathHtml, html);

  console.log("Succesfully created an HTML table");
} catch (error) {
  console.log("Error generating table", error);
}
