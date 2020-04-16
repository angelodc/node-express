const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("bem vindo!");
    });
    
    app.get("/meunome",function(req,res){
        res.send("Meu nome é Douglas");
    });
    //parametros 
app.get("/parametros/:nome/:cidade",function(req,res){
    var nome = req.params.nome;
    var cidade = req.params.cidade;
    res.send("ola "+ nome+ " de "+cidade);
})
// ? parametro não obrigatório
app.get("/blog/:artigo?",function(req,res){
var artigo = req.params.artigo;
if(artigo){
res.send("<h2>artigo "+ artigo+ "</h2>");
}else{
res.send("esse é meu blog tudo sobre nodemon");
}
});

//Query params http://localhost:4000/youtube?canal=einerd
app.get("/youtube",function(req,res){
    var canal = req.query["canal"];
    if(canal){
        res.send("canal "+ canal);
    }else{
        res.send("canal não fornecido");
    }
})

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro!");
    } else{
        console.log("servidor iniciado com sucesso!")
    }
})