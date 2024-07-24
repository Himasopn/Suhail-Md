const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://secepe8359:2ySdWPIjusvJ749v@cluster0.fray0wp.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/917002015750?text=Hey%20%F0%9F%8C%88";
global.website=process.env.GURL || "https://wa.me/917002015750?text=Hey%20%F0%9F%8C%88" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917002015750";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_11_06_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1I2UWFDdGRsMzVMS2E0WEhXYkMxQzJZcklLWkpyaGN6M3p3V1ptV2x4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MTQ4NTk3NjIwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjY3NEU5OEYyQkRGNzFCMDE2NEU2MTFBNEY2OEQ1QTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODE5MTk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjE0ODU5NzYyMDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxNUVFMTk5MTAzMUFFQjg5M0EwNUZGNzg3QTFBODJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgxOTE5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYxNDg1OTc2MjA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RjIzRkVEQThBNUVCNUE0NTQwQkRCOTY1NDlCRDg5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MTkxOTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MTQ4NTk3NjIwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzNFNTQ5NDREODdCREI0REJDMUMyOUUzODkxMTkzQTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODE5MTk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZTTndNLWMyUUtxM0J5OEpGTC1FS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjQ4OTI2MzItZDM4OS00MThmLThjNDAtMjM4ZjVlNDc3YTAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDksXG4gICAgICA5NCxcbiAgICAgIDIwMixcbiAgICAgIDgxLFxuICAgICAgMjEwLFxuICAgICAgMTAyLFxuICAgICAgMjE4LFxuICAgICAgMTg2LFxuICAgICAgMTY3LFxuICAgICAgMTA4LFxuICAgICAgMTg2LFxuICAgICAgMjQ4LFxuICAgICAgMTExLFxuICAgICAgMTQ3LFxuICAgICAgMjI0LFxuICAgICAgNzAsXG4gICAgICAxODUsXG4gICAgICAxMjcsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgNDAsXG4gICAgICAyMjUsXG4gICAgICAyMCxcbiAgICAgIDIzMSxcbiAgICAgIDE3MixcbiAgICAgIDIyNSxcbiAgICAgIDE2NixcbiAgICAgIDgzLFxuICAgICAgMTksXG4gICAgICAyMDIsXG4gICAgICAyMjQsXG4gICAgICAxNzAsXG4gICAgICAxNyxcbiAgICAgIDUwLFxuICAgICAgMTEyLFxuICAgICAgNjEsXG4gICAgICAxMzQsXG4gICAgICAxNyxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDNFOTlvREVMakFnN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSTUE4UnRObXU0eTVVK3VOK094dmhsNk9IT0FxM1BEMGZZb0U3L2c1Y2lvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpqNTMvU3dPcVgxbHpuSGFrWEhUd1RFNWdoSml4RzlkQi9vYTRDajdYRWdiL2Y5VXRCbWZOcUNGcW10dGUxa0psVTcwemU4NkErQ0JtemFmSjloZ0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm84MmMrcUZVUXdmR2VWd2pZSmRUTXpZM3RLM1VRWUw4TU51NC96ZnlCZ0lYeEx5VGJSNkhtVERWTE5BTXVsZDFmTU1PdXBLeVFhRG1mYTNCbExTbmhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjE0ODU5NzYyMDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzQ3NzE2MDU4MDMyNDE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwlqOQIOG0gMm0yaLhtIfKnyDhtITJqsqA4bSEyp/htIcg8JajkFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjE0ODU5NzYyMDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTkxOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKMWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUoxbC5qc29uIjogIntcImtleURhdGFcIjpcIi8vbk4yK3BVcUQ5R0EzS1FWdkk5Z2hhV1EyeDJxakhoMDBOaHFxY1NWa3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTk2MDA4NTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MTkxOTU1MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "+917002015750",
  packname: process.env.PACK_NAME || "⚛️",
  botname : process.env.BOT_NAME  || "💫",
  ownername:process.env.OWNER_NAME|| "🌈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
