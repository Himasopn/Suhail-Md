const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ynun7nn7:bAYsZBE5yRgB9kGR@cluster0.xd0t2me.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
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
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_53_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGtucXI2MzliL3dOR05jYXR1V0pUMG55ZEoxV3N3WFVWWWZHb0RkbFA0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGRLSmgxQVhTdFM0Z3pXRnFsOVZ1QVwiLFxuICBcInBob25lSWRcIjogXCI3MmQxNTFjNS0zZjgzLTRkZmQtYTdlYy0xZmNjMTJmYTkyYzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTEyLFxuICAgICAgMTgxLFxuICAgICAgODksXG4gICAgICAxMjQsXG4gICAgICA5OSxcbiAgICAgIDAsXG4gICAgICAxMDQsXG4gICAgICA0OCxcbiAgICAgIDY4LFxuICAgICAgMTU0LFxuICAgICAgODAsXG4gICAgICA3MixcbiAgICAgIDE2OCxcbiAgICAgIDIwLFxuICAgICAgMTMxLFxuICAgICAgNjMsXG4gICAgICAxMDUsXG4gICAgICAxMDgsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE4NixcbiAgICAgIDIzMSxcbiAgICAgIDM2LFxuICAgICAgOTIsXG4gICAgICAyNDMsXG4gICAgICAxOTksXG4gICAgICAxNzQsXG4gICAgICAxNDEsXG4gICAgICA1NCxcbiAgICAgIDcyLFxuICAgICAgMjE4LFxuICAgICAgMixcbiAgICAgIDMzLFxuICAgICAgMTIyLFxuICAgICAgMTE5LFxuICAgICAgMjcsXG4gICAgICAxMzMsXG4gICAgICAxMTcsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3VXh1c0RFTHV5eExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnVzUWdKTjZGTnBNUGVhWmVFY25zR1hqUE9Rbjg5dWVHTm4zT0c5STFGTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCMW1XbDZYZTJROEpFRXJNdWFLWDdmS2I5MkdyeldEeWh3bEc3REpLZmswSDMzL1F2WVk1bnZuZXFUWTZvVGhHZ2ZhZmIyaEdyS0tEVCtSb21zME1CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3VXR1UXJMa3lOSGg5UVBmVEwxVFJpbFVhUU9jVnVOMWg0L0UyU3VuQkpIeVZCTE95Zk9vOGk1bEdOSXhncGxkeFlBeDZUVDhTd0ZyUVkzVXBnTytDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjc5MTQ5OTU4NjIyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzkzNDIxMTA1Njg1OTI6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI3OTE0OTk1ODYyMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzg1MjI1XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
