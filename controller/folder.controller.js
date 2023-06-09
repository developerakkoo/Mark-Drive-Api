



async function filName(req,res){
    const folderName = req.body.folderName || "New folder";

try {
    if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    res.status(201).json({msg:"folder created successfully"});
    }
} catch (err) {
    console.error(err);
}
}