const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res)=>{
    res.send("Hola caracola");
});

app.listen(port, ()=>{
    console.log(`Server ejecutando en el puerto ${port}`);
});