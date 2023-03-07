const express=require("express")
const app=express()
const path=require("path")

require("./db/connect")
const User=require("./model/usermessage.js")

const port=process.env.PORT || 3000
const ejs=require("ejs")  //for register partial method
const { urlencoded } = require("express")

const staticpath=path.join(__dirname,"../public")
const templatepath=path.join(__dirname,"./templates/views")
const partialpath=path.join(__dirname,"./templates/partials")
 app.use(urlencoded({extended:false}))         



app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.set("view engine","ejs")
app.set("views",templatepath)


app.get("/",function(req,res){
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.post("/contact",async(req,res)=>{
    try{
        //  res.send(req.body); 
        const userData=new User(req.body)
        await userData.save();
        res.render("index")
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(port,(req,res)=>{
    console.log("server is up")
})