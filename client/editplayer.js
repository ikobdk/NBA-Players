$(document).ready(function(){
  let player = window.location.search;
  let idArray = player.split('')
  let idlength = idArray.length;
  let specIdArray = [];
  specIdArray.push(idArray[idlength-2])
  specIdArray.push(idArray[idlength-1])

   let id;
  if(['1','2','3','4','5','6','7','8','9'].indexOf(specIdArray[0])!==-1){
      id = specIdArray.join('')
  }else{
      id = idArray[idlength-1];
  }
  $.get(`/basketball_players/${id}`,function(player){
    let playerObject = {};
    playerObject.name = $('#name').val(player[0].name);
    playerObject.team = $('#team').val(player[0].team);
    playerObject.height = $('#height').val(player[0].height);
    playerObject.weight = $('#weight').val(player[0].weight);
    playerObject.position = $('.select').find(":selected").text(player[0].position);
    playerObject.age = $('#age').val(player[0].age);
  })

  $('#updateButton').click(function(){
    let updatedObject = {};
    updatedObject.name = $('#name').val();
    updatedObject.team = $('#team').val();
    updatedObject.height = $('#height').val();
    updatedObject.weight = $('#weight').val();
    updatedObject.position = $('.select').find(":selected").text();
    updatedObject.age = $('#age').val();
    console.log(updatedObject)
    $.ajax({
      url:`/basketball_players/${id}`,
      method:"put",
      data:updatedObject,
    }).done(function(){
      window.location = `viewplayer.html?id=${id}`
    })

  })
})
