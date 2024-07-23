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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_23_57_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxZM3lrMVZPbWNSa2VvMTZyMnlDRXFvTWFncTFjazRVcnhoOGwvamRsN3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDMxNTUwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ3MTFDN0Q4QTY4MjIzNzg2MDA2M0ZCQkRCMDAxNUQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY5MjY0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAzMTU1MDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNjAyNjhGMTlFNUMyMEMwOERGN0ZDRTQzQjY5NEJBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2OTI2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMzE1NTAyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQURDNEI2QzA4NjRDRTE5MkJEMDU0RjlCN0E1RjJGMEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjkyNjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDMxNTUwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBOTJDNjRBN0U3QzQyRDI2OUQxRkQ5MzI4MDVFREMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY5MjY0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWd3VLb0pTY1JfaVpOQzlGeGcxX3JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYzEzNWRlLWRjMGMtNGRhNi1iNjY5LTMyZjI2N2FjMmU3N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxMDksXG4gICAgICAxNzcsXG4gICAgICAxMCxcbiAgICAgIDE4MCxcbiAgICAgIDgyLFxuICAgICAgNzAsXG4gICAgICA1MixcbiAgICAgIDcyLFxuICAgICAgMzYsXG4gICAgICAyMyxcbiAgICAgIDMsXG4gICAgICA2NSxcbiAgICAgIDE0MixcbiAgICAgIDE3NyxcbiAgICAgIDQzLFxuICAgICAgOSxcbiAgICAgIDEwNyxcbiAgICAgIDE0OCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgNDMsXG4gICAgICAyMDEsXG4gICAgICA5MixcbiAgICAgIDE1MixcbiAgICAgIDIxNixcbiAgICAgIDMsXG4gICAgICAyLFxuICAgICAgOTUsXG4gICAgICAxNixcbiAgICAgIDkwLFxuICAgICAgMTAxLFxuICAgICAgMTI4LFxuICAgICAgNDMsXG4gICAgICA3NyxcbiAgICAgIDE5NCxcbiAgICAgIDMzLFxuICAgICAgNTgsXG4gICAgICAxMTUsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWFE5bVVRNE9QN3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5veVlYenQxM2RDa0MrQ29jMFRZS0tLVGY2cDZid3VqMHIwNVIxN1pRZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG5wYzZtRkdVd2hkWHRpZXdyaTRuMXFEZ2hmdkNRT3ZLbmNndFdrT29Md3ZxaGRnMW5Od1FFL2hvL3NYdTY1aitGRDZ3RnBwU0dWTlg5aHk0dDc0Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDRuRkdXRUdJSTErclRXWVE1dVN1enBhZlR4NW5laXdUbmNXUExWVU8wUlBnUytoT0NJekFTOTJqUS95d2R3TDdvdWFuVlMvMUhGaFB3bzlsMmdVQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzE1NTAyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWFzaGlmIFNlclwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTYyMTk0MjkyOTE0OjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMzE1NTAyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjkyNjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFhjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2eW9JWndaeEFiMDVMZmQ0YUJ3K2pOTGJkWXJYOEh0aGE5Mis5Ymp3L09ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzc1NTkwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjkyNjQ2MjYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "✝️",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
