// imports 
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const upload = require('./upload');

// middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());



const message = async (req, res) =>{
    console.log(req.body);
    console.log(req.files);
    res.send("Successfully uploaded files");
}

// routes
app.post('/candidate', upload.array('cv'), message);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))