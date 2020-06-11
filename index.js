const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'uander',
    database: 'nodeDB' //Nome do Banco
    //employee é a tabela fornecedores
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB Conectado com sucesso');
    else
    console.log('DB falha na conexao n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000,()=>console.log('Express server is runnig at port no :3000'));

//Get todos os fornecedores
app.get('/fornecedores',(req,res)=>{
    mysqlConnection.query('SELECT * FROM fornecedores',(err,rows, fields)=>{
        if(!err)
        res.send(rows);
        //console.log(rows[0].ID);
        else
        console.log(err);
    })
});

//Get um fornecedor
//ffornecedores/1
app.delete('/fornecedores/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM fornecedores WHERE ID = ?',[req.params.id],(err,rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

//Delete um fornecedor
/funcionarios/1
app.get('/fornecedores/:id',(req,res)=>{
    mysqlConnection.query('DELETE * FROM fornecedores WHERE ID = ?',[req.params.id],(err,rows, fields)=>{
        if(!err)
        res.send('DELETE ');
        else
        console.log(err);
    })
});