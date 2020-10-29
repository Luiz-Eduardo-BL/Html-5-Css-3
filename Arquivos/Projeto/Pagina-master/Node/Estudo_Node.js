const express = require("express")
const app = express()
//Rotas = Caminhos para a aplicação

app.get("/", function(req,res){
    res.send("Foda-se!!!!!!")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina Sobre") //Exemplo de ROTAS
})

app.get("/home", function(req,res){
    res.send("Pagina Inicial")
})

// Req => Requisição q vc recebe 
//Res => Objeto usado para enviar msg para o Client

//PARAMETROS => /:

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Voce eh " + req.params.cargo + "</h2>")
    //só é possivel usar um send nas rotas
})

app.listen(8081, function(){
    console.log("Servidor Rodando")
}) //Tem que ser a ULTIMA da aplicação