const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_40_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWmVXT25UUitRaGk5eVBkdmdmYjQ2NjlWSmhvMmdkZjk4RWVNaXZ0QTQvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTThTUXFmQm9UWGFqbVVrM0doRURPQVwiLFxuICBcInBob25lSWRcIjogXCIyMzBhM2RmYS0wMzdlLTQxYTgtYTZkZi04NDg3NjI5ZTljNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMjI3LFxuICAgICAgNDcsXG4gICAgICAyMzEsXG4gICAgICAxMDUsXG4gICAgICA1NCxcbiAgICAgIDkwLFxuICAgICAgMTQ5LFxuICAgICAgNzMsXG4gICAgICAxNTcsXG4gICAgICAxMjYsXG4gICAgICAxOTksXG4gICAgICAxMTUsXG4gICAgICAxMjYsXG4gICAgICAzMyxcbiAgICAgIDYwLFxuICAgICAgMTQwLFxuICAgICAgMTYwLFxuICAgICAgMjA5LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAyNTIsXG4gICAgICAxMzUsXG4gICAgICAxODUsXG4gICAgICAyMjYsXG4gICAgICAxMjcsXG4gICAgICAxOTksXG4gICAgICAxMzEsXG4gICAgICA1MSxcbiAgICAgIDE2OCxcbiAgICAgIDIzNCxcbiAgICAgIDUyLFxuICAgICAgOSxcbiAgICAgIDI0OSxcbiAgICAgIDgsXG4gICAgICAxNjYsXG4gICAgICAxNDMsXG4gICAgICAxNzQsXG4gICAgICAxNixcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0tUU0ZFNVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzkwODQyOTk0NTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4ODc5NDUyNzk5MTY4OjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvWHptRVFoS2JndXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTktDRnZIcjVIMHA1UTlPMjFELzhKV1F1VURON2VFY05JM1lPUHlLRDFFMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkRy9XcGp3MFM2ZGx5SzdnSkx6UHlmdDRtdjRwUGNsSWU0OUs0S1Y4NFVJN3o3dUtpVlJFQ3FJOWY2alBRN1lOcmhTenN4dndZaXNTM0NTRStIOEVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvVGhDVndRZ2FuZ2x3S0VEYkNYcjdLSnIvVGcySUtudDNiQ2tLQ1VheVVnWGduOFhkTEY4WmsxbytvSkFEeklqU1M4Tm5aTnJPRThtd0xvaFVRTmdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc5MDg0Mjk5NDU6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkyMjQzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4xOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjE4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzQ4WUVtV1N5YS92a2xraVZiMmpTeERpRFZKbDgxQjFQSDZOb0phWEIrWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ3MTI4NDYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MjIzNTAzMjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
