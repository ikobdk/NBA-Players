$(document).ready(function(){
  $.get('/basketball_players/',function(players){
    for(var i=0;i<players.length;i++){
      var name = players[i].name;
      var team = players[i].team;
      var height = players[i].height;
      var weight = players[i].weight;
      var position = players[i].position;
      var age = players[i].age;
      $('.playerdisplay').append(`
        <div class="row">
              <div class="col s12 m5">
                <div class="card-panel teal">
                  <span class="white-text">
                    <p>name:${name}</p>
                    <p>Team:${team}</p>
                    <p>Height:${height}</p>
                    <p>Weight:${weight}</p>
                    <p>Position:${position}</p>
                    <p>Age:${age}</p>
                    <div class="row">
                      <div class="col s6">
                        <a class="waves-effect waves-light btn-large" href="viewplayer.html?id=${players[i].id}">View Player</a>
                      </div>
                      <div class="col s6">
                        <a class="waves-effect waves-light btn-large" href="playerslist.html">Delete Player</a>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
        `)
    }
  })
})







// <div class="row">
//       <div class="col s12 m5">
//         <div class="card-panel teal">
//           <span class="white-text">I am a very simple card. I am good at containing small bits of information.
//           I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//           </span>
//         </div>
//       </div>
//     </div>


// name:'Kyrie Irving',
// team: 'Cleveland Cavaliers',
// height:'6ft-3in',
// weight:'193lbs',
// position:'Point Guard',
// age:24
