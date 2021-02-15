const {google} = require('googleapis');
const keys = require('./servicekey.json');
const config = require('dotenv').config();
const {
  writeGoogleSheet,
  writeClearHeadlineGoogleSheet,
} = require("./writeGoogleSheet.js");

//JWT 
//onst go
const auth = async () =>{
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  )

  client.authorize((err,tokens)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Connected..");
    }
  })
  return client;
}

exports.BackupLog = async (req,res) =>{
  let sheet_id  = process.env.SHEET_ID;
  if(sheet_id===undefined){
    sheet_id = req;
  }
  console.log(sheet_id);
  let client = await auth();
  //--- data
  let sheet = [];
  sheet.push(["Clicks", "Impressions", "CTR"]);
  let dataRow = [];
  dataRow.push("Column 1");
  dataRow.push("Column 2");
  dataRow.push("Column 3");
  sheet.push(dataRow);
  try{
    await writeGoogleSheet(sheet, "backuplog", sheet_id,client);
  }catch(error){
    console.log("write error : " + error);
  }

}