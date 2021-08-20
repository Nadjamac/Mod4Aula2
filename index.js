const express = require('express');

const app = express();

const port =3000;

app.use(express.json()); 

const Filmes =[ 
    "Matrix: Matrix",
    "O Contador",
    "Homen Aranha",
    "Homen de Ferro",
    "Vingadores "
]

app.listen(port,function(){
    console.log(´Rodando https://localhost3000:/filmes ${port}/`)

});

app.get('/Filmes',(req,res)=>{
    res.send('Filmes');
});

app.get('/Filmes/:id'){
    const filme = filme [id];
    if(!filme){
        res.send('filme não encontrado');
    }
}

app.get('/Filmes/:id',(req,res) =>{
    const id= req.params.id-1;
    const filme = filmes [id];
    if(!filme){
        res.send('filme não encontrado');
    }
}

app.post('/filmes/:id',(req,res) =>{
    const filme= req.body.filme;
    const id = filmes.length +1 ;

    if(!filme){
        res.send('filme não encontrado');
        filme.push(filme);
        res.send(´filme adicionado com sucesso: $ {Filmes} O id do filme é ${id}`)
    }
});

app.delete('/filmes/:id`,(req,res)=>{
    cons id=req.params.id -1;
    delete.filmes[id]
    res.send('filme excluido com sucesso ')

});