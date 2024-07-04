const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTFNUCt6WTd5eWdVZXpYS1M2aTEzUnBFck41L05GWnUxTzkvM1pXRWp1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MDY4Njk5MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3NTc5QzBFMjNGRjAyRDc0Mjk0NEY5NkUwNzY0ODhDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEwOTI5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQwNjg2OTkyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjE4Qjc4RDgxQjQ3MzE0ODYzRUFFRjc1MTZFNDMzMzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTA5MjkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDA2ODY5OTIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjcxMEZGNjgyRjg2NkU0QTQ3NURGMjZDRTQ5QjIxRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMDkyOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MDY4Njk5MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNCODQwM0JGNkIwOTk0QzVBQkNCMzk3NTZFNzgwMjIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEwOTI5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzaW1iQThxN1RIcU41RXd0dUlEM0ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjNWE4NTgxLWQ1YTEtNGMwNy05ZGY1LTZjMDE4ZDg1NmMyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMzgsXG4gICAgICA2MyxcbiAgICAgIDQ0LFxuICAgICAgNyxcbiAgICAgIDIwMixcbiAgICAgIDc3LFxuICAgICAgMjU0LFxuICAgICAgMTEwLFxuICAgICAgMTA0LFxuICAgICAgMTgsXG4gICAgICAyNTMsXG4gICAgICAxMzUsXG4gICAgICA3MyxcbiAgICAgIDE3NCxcbiAgICAgIDE4LFxuICAgICAgNjMsXG4gICAgICAzMyxcbiAgICAgIDEwOCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICA5MSxcbiAgICAgIDMzLFxuICAgICAgMTg2LFxuICAgICAgMTM1LFxuICAgICAgODMsXG4gICAgICAyMTcsXG4gICAgICAxMTEsXG4gICAgICAxODksXG4gICAgICA1NixcbiAgICAgIDE5NSxcbiAgICAgIDc0LFxuICAgICAgMTgsXG4gICAgICA0NSxcbiAgICAgIDE2OSxcbiAgICAgIDI5LFxuICAgICAgMTA3LFxuICAgICAgMTYwLFxuICAgICAgMjMwLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS25yZ3VJQ0VPaVJtN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwUHoySFFaRlI2VVFGczRPQXVpNC82OUZNRTRSYXNsUFo0SjhHaDk0TTNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInB5Sk9kTjdqN2Q1V3Q1UHF1S2NrNmdNYkoxQzZQc0xldHlsRStaOEcvbkNIZVFWaUt1Y0RIemxRRHJMMXErY0x0K09ZM1IrNGVwdmtOR25FVmI4T0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhxeFJ6dWZNcU01NDNWWmtHaFduRWh0aHN4SXRXYmFmTHhseXFrcDcwcERTTHdkdkVzVzVjc3FZczhwUVhTRGFqVzYweHVvSXc1NmlIMXZqNlFYdWdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA2ODY5OTIzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4NTI5Mjg4NTAzMzk3OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiL2tpbGwgQHMg8J+rp1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA2ODY5OTIzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMDkyOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMK1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwrUS5qc29uIjogIntcImtleURhdGFcIjpcInA3RU45SElJdDhQWWp2OUEwemx3MUxiZzJIbXNHNFJubFZCWWxFZCtJTHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzQyNDM4MzEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMDkyOTEwNjlcIn0iCn0="  // PUT your SESSION_ID 


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
