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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGFHTmJJQ3lsbGJ1UUNCZEJrZDEvc3ViZ1RKai9SeHpJOWR4YVNacDNKND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3NZRWRpWGhSUldfRENUakVlaTY2d1wiLFxuICBcInBob25lSWRcIjogXCJiNWY2MDBkNi05MzAzLTQ2ZGItYjg3Ny02MWI5ZGNhMGZlZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDExNCxcbiAgICAgIDEzOCxcbiAgICAgIDE5MCxcbiAgICAgIDE4OCxcbiAgICAgIDgxLFxuICAgICAgMyxcbiAgICAgIDE0NyxcbiAgICAgIDU3LFxuICAgICAgMjA3LFxuICAgICAgMTQ0LFxuICAgICAgNzEsXG4gICAgICAyMTAsXG4gICAgICAxNzEsXG4gICAgICAxNixcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDEwNyxcbiAgICAgIDQ2LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDQyLFxuICAgICAgODEsXG4gICAgICAxMTYsXG4gICAgICAxMDEsXG4gICAgICA1OSxcbiAgICAgIDI1LFxuICAgICAgMjAzLFxuICAgICAgODEsXG4gICAgICAyMDcsXG4gICAgICAxLFxuICAgICAgOTAsXG4gICAgICAxMDcsXG4gICAgICAyNDcsXG4gICAgICAwLFxuICAgICAgMTcxLFxuICAgICAgMTQ3LFxuICAgICAgMjA5LFxuICAgICAgMjQ1LFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZXcmNVSEVPbWo5TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoRXhPTnZtRDNxR1FBMVJUb2lqRm1iTUtZK1FaZ0xreXlGdjRrckI2MmxjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk41MnFDK0lxSEszeVdhTG43T0ljNjlEWm9xQ3JYdlFxZzQ0aTM0bklhTTZwK3RIVm5NWnRpdmh6L3hJVFhid1FuUWhPenhLa3VXVVpzOVFMZ2pMTENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZPWHY2dVNxTGxEYmVUUU1sU1BwQVVYWElTSy9CWkd2eERPUHZuWXRoSFpuWU1jUG1RZ2EwVUJwYTBXK2R1MFU5WHpNVTJwNnJBZmR1RFpCNTdYL0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA2ODY5OTIzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODUyOTI4ODUwMzM5NzoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5OIXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDY4Njk5MjM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTY5NzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEJ6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHQnNOalF0NVFFZlZ6LzhrRmxCOWdoaXVLcGJrWnlNbE02by9uNFJCQmRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjQ1MDAwMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2OTc3MzQ2MVwifSIKfQ=="  // PUT your SESSION_ID 


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
