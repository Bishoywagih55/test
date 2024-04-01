const express = require('express');
const app = express();

port = 2121;

app.listen(port , ()=>{
    console.log("listen to port " + port);
})