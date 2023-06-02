const express=require('express');
const morgan=require('morgan');
const app= new express();
const api=require('./routing');
require('dotenv').config();
app.use(morgan('dev'));
app.use('/api',api);
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

});

