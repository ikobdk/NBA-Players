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
    var name = player[0].name;
    var team = player[0].team;
    var height = player[0].height;
    var weight = player[0].weight;
    var position = player[0].position;
    var age = player[0].age;
    console.log("appending player")
    $('.playerdisplay').append(`
      <div class="row">
            <div class="col s12 m5">
              <div class="card-panel blue">
                <span class="black-text">
                  <p>name : ${name}</p>
                  <p>Team : ${team}</p>
                  <p>Height : ${height}</p>
                  <p>Weight : ${weight}</p>
                  <p>Position : ${position}</p>
                  <p>Age : ${age}</p>
                  <div class="row">
                  <div class="col s6">
                  <a id="viewplayer" href="index.html" class="waves-effect waves-light btn-large">View All Players</a>
                  </div>
                  <div class="col s6">
                  <a id= "editplayer" href="editplayer.html?id=${player[0].id}" class="waves-effect waves-light btn-large">Edit Player</a>
                    </div>
                  </div>
                  <div class="delete">
                      <a id= "deleteplayer" class="waves-effect waves-light btn-large">Delete Player</a>
                  </div>
                </span>
              </div>
            </div>
          </div>
      `)
  }).then(function(){
      $('#deleteplayer').click(function(){
        $.ajax({
          url:`/basketball_players/${id}`,
          method:"delete",
        }).done(function(){
          window.location = `playerslist.html`
        })
      })
    }
  )
})
