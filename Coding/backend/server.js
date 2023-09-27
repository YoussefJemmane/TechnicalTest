// imports 
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const upload = require('./upload');
const fs = require('fs');


// middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());



// routes
app.post('/candidate', upload.array('cv'), (req, res) => {
    
    const fileInfo = {
        filename: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.Email,
        about: req.body.Description,
    };

    fs.writeFileSync(`./json/${fileInfo.filename + fileInfo.lastName}.json`, JSON.stringify(fileInfo));

    res.send('ok');
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))