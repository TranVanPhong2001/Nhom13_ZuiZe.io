const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const hbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const collection = require('./app/models/User')


db.connect();

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine({
      extname: '.hbs',
      helpers: {
        sum: (a,b) => a+b,
      }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


//Routes init
route(app);

app.get("/login",(req,res)=>{
  res.render("login");
});
app.get("/signup",(req,res)=>{
  res.render("signup");
});
app.post("/signup", async(req,res)=>{
  const data ={
    name: req.body.username,
    password: req.body.password
  }
  const existingUser = await collection.findOne({name: data.name});
  if(existingUser){
    res.send("user is already exist")
  }else{
  const userdata = await collection.insertMany(data);
  console.log(userdata);
  res.redirect('login');
  }
})
app.post("/login", async(req,res)=>{
  try{
    const check = await collection.findOne({name: req.body.username});
    if(!check){
      res.send("user name cannot found");
    }
    if(check){
      res.redirect('admin/products');

    }else{
      req.send("wrong password");
    }
  }catch{
    res.send("wrong details");

  }
  
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
