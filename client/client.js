$(document).ready(function(){
  $.get('/basketball_players',function(players){
    console.log(players)
  })
})
