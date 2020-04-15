const express = require("express");
const app = express();

app.get("/",function(req,res){
res.send("bem vindo!");
});

app.get("/meunome",function(req,res){
    res.send("Meu nome é Douglas");
});
app.get("/blog",function(req,res){
res.send("esse é meu blog");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro!");
    } else{
        console.log("servidor iniciado com sucesso!")
    }
})