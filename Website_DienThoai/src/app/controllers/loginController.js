const Login = require("../models/User");

class loginController{

    //[GET] /api/dienthoais/:id
    async login(req, res, next) {
       
            res.render("login");
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
    }

    
}
module.exports = new loginController;