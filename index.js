const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('client'))
const knex=require('./db/knex');
const port = process.env.PORT||3000;


app.get('/basketball_players',function(req,res){
  knex('players').then(function(players){
    res.json(players)
  })
})


app.get('/basketball_players/:id',function(req,res){
  if(!isNaN(req.params.id)){
    knex('players').where('id',req.params.id).then(function(players){
      res.json(players);
    })
  }else{
    res.status(404)
    res.json({message:"Get a life"})
  }

})


app.post('/basketball_players',function(req,res){
  knex('players').insert({
    name:req.body.name,
    team:req.body.team,
    height:req.body.height,
    weight:req.body.weight,
    position:req.body.position,
    age: req.body.age},'id').then(function(players){
      res.json(players)
    });
  });

  app.put('/basketball_players/:id', function (req, res){
    knex('players')
    .where('id', req.params.id)
    .update({
      name:req.body.name,
      team:req.body.team,
      height:req.body.height,
      weight:req.body.weight,
      position:req.body.position,
      age: req.body.age}).then(function(players){
      res.json(players)
    });
  });

app.listen(port,function(){
  console.log('We are in business!')
})

app.delete('/basketball_players/:id',function(req,res){
  knex('players')
  .where('id',req.params.id)
  .del()
  .then(function(players){
    res.json(players)
  })
})
