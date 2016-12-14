$(document).ready(function(){
  $('.btn').click(function(){
    let playerObject = {};
    playerObject.name = $('#name').val();
    playerObject.team = $('#team').val();
    playerObject.height = $('#height').val();
    playerObject.weight = $('#weight').val();
    playerObject.position = $('.select').find(":selected").text();
    playerObject.age = $('#age').val();
    $.post(`/basketball_players/`,playerObject,function(data){
       let id = data[0];
       window.location = `viewplayer.html?id=${id}`
      })
    })
  })
