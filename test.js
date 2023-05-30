const JSZip =  require('jszip');
const fs = require('fs');


(async()=>{
    const zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    const images = zip.folder('images');
    images.file('public/User2/1685423510820.mp4',fs.readFileSync('public/User2/1685423510820.mp4'),{base64:true})

    const content = await zip.generateAsync({type:"nodebuffer"})
    fs.writeFileSync('T1.zip',content)
})();





    
    
