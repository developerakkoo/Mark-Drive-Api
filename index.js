const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
// const HandelSharing = require('./controller/Drive');

const {FileRoutes,userRoutes} = require('./routes/index');
app.use(userRoutes);
app.use(FileRoutes);

app.use( express.static('public'));
app.use('/public', express.static('public'))

app.post('/nameFile',async (req,res)=>{
    const folderName = req.body.folderName || "New folder";

try {
    if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    app.use(folderName, express.static(folderName));
    res.status(201).json({msg:"folder created successfully"});
    }
} catch (err) {
    console.error(err);
}
});

// app.route('/ShareLink/:id').get(HandelSharing.handelFileSharing).post(HandelSharing.handelFileSharing)




app.get('/',(req,res)=>{
    res.status(404).send('<style> h1 { text-align: center;} </style> <h1>Welcome To Mark-Drive </h1>')
})
app.use((req,res)=>{
    res.status(404).send('<style> h1 { text-align: center;} </style> <h1>404 Page Not Found.!</h1>')
    })



    const DB_URL = "mongodb://127.0.0.1:27017/App"


mongoose.connect(DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})



app.listen(8000,console.log('8000..........🚀'));


