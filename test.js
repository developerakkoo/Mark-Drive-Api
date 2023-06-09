// const JSZip =  require('jszip');
const fs = require('fs');


// (async()=>{
//     const zip = new JSZip();
//     zip.file("Hello.txt", "Hello World\n");
//     const images = zip.folder('images');
//     images.file('public/User2/1685423510820.mp4',fs.readFileSync('public/User2/1685423510820.mp4'),{base64:true})

//     const content = await zip.generateAsync({type:"nodebuffer"})
//     fs.writeFileSync('T1.zip',content)
// })();





    
    
// console.log(1024*1024*1024*1)//  byte/kb/mb*gb



// fs.appendFile(`Log-${1000}.txt`,msg  + "\n" =>{ 
//     console.log('Activity Logged'); 
//     if(error){
//         console.log('Error writing to log file', error);
//     }
// });
// app.js
// const msg = `File Backup :${backupObj.Link} At ${moment().format('MMMMDoYYYYh, mm-ss-a')}\n`
// fs.writeFile(`C:\Users\sakib\OneDrive\Desktop\Drive_API/Log-${savedUser._id}.log`,msg,error =>{ 
//     console.log('Error writing to backup log file', error); 
// });
/*   
     const remainingQuota =   1024 * 1024 * 1024 - savedUser.storageUsage;531287817
    console.log(req.file.size);
    console.log("msl",maxStorageLimit)
*/

// const path = require('path');

// // Function to create or append to a log file
// const message = "File Backup001"
// function logToFile(message) {
//     const logPath = path.join(__dirname, 'app1.log');
//     const logMessage = `${`Log-${2000}`} - ${message}\n`;

//     fs.appendFile(logPath, logMessage, (error) => {
//     if (error) {
//     console.error('Error writing to log file', error);
//     }
//     });
// }

// // Example usage
// logToFile(message);
