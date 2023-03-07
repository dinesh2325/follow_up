const express=require("express")
const app=express()
const path=require("path")
require("./db/connect")
const port=process.env.PORT || 3000
const ejs=require("ejs")
const staticpath=path.join(__dirname,"../public")

app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.set("view engine","ejs")


app.get("/",function(req,res){
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("index");
})
app.listen(port,(req,res)=>{
    console.log("server is up")
})