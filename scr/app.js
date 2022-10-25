const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = 8080;

const staticPath=(path.join(__dirname,"../public"));
const dynamicPath=(path.join(__dirname,"../templates/views"));
const partialPath=(path.join(__dirname,"../templates/partials"));

app.set('view engine', 'hbs')
app.set('views',dynamicPath);
hbs.registerPartials(partialPath)
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/index",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about")
});

app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.get("/project",(req,res)=>{
    res.render("project")
});
app.get("*",(req,res)=>{
    res.render("404");
});


app.listen(port,()=>{
    console.log(`the server is lanched at port ${port}`);
})