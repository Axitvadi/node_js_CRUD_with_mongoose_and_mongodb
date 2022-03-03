require('dotenv').config();
require('./config/db');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const router = require('./routes/index');
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json({limit:'1024mb'}));
app.use(bodyparser.urlencoded({limit:'1024mb',extended:false}));

app.use(router);

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server successfully started at port ${port}`);
})