const express = require('express'); // import the express package
const app = express(); // object of the express

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/volleytest',require('./controllers/testcase'));  // http://192.168.43.129/restest/register

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)})