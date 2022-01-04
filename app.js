const express=require("express");
const mongoose = require('mongoose');
const router = require('./Router/index');
const cors = require('cors');

const app = express();
const port=8989;
const hostname="localhost";
const dburl = 'mongodb+srv://ananda_123:ananda_123@cluster0.1uqms.mongodb.net/zomato_clone?retryWrites=true&w=majority';

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  next();
});
app.use(cors());
app.use(express.json());
app.use('/',router);
mongoose.connect(dburl).then(res=>{

    app.listen(port,hostname,() =>{
        console.log(`servr is running at ${hostname}:${port} `)
    });

})
.catch(err=>console.log(err));
