const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();

//var public = path.join(__dirname, 'public');

//app.use(express.static(public));

router.get('/', function (req, res) {
    res.send("aaaaaa");
    //res.sendFile(path.join(public + '/index.html'));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 80);

console.log('Running at Port 80');
