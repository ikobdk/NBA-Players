
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
        const players =[
          {
            name:'Lebron James',
            team:'Cleveland Cavaliers',
            height:'6ft-8in',
            weight:'250lbs',
            position:'Small Forward',
            age:31
        },
          {
            name:'Steph Curry',
            team: 'Golden State Warriors',
            height:'6ft-3in',
            weight:'190lbs',
            position:'Point Guard',
            age:28
          },
          {
            name:'Kevin Durant',
            team: 'Golden State Warriors',
            height:'6ft-9in',
            weight:'240lbs',
            position:'Small Forward',
            age:28
        },
        {
            name:'James Harden',
            team: 'Houston Rockets',
            height:'6ft-5in',
            weight:'220lbs',
            position:'Shooting Guard',
            age:27
          },
          {
              name:'Russel Westbrook',
              team: 'Oklahoma City Thunder',
              height:'6ft-3in',
              weight:'200lbs',
              position:'Point Guard',
              age:28
            },
            {
                name:'Blake Griffin',
                team: 'LosAngeles Clippers',
                height:'6ft-10in',
                weight:'251lbs',
                position:'Power Forward',
                age:27
              },
              {
                  name:'Kyrie Irving',
                  team: 'Cleveland Cavaliers',
                  height:'6ft-3in',
                  weight:'193lbs',
                  position:'Point Guard',
                  age:24
                },
                {
                    name:'Karl-Anthony Towns',
                    team: 'Minesotta Timberwolves',
                    height:'7ft-0in',
                    weight:'244lbs',
                    position:'Center',
                    age:21
                  },
                  {
                      name:'Carmelo Anthony',
                      team: 'New York Knicks',
                      height:'6ft-8in',
                      weight:'240lbs',
                      position:'Small Forward',
                      age:32
                    },
                  {
                        name:'Dwayne Wade',
                        team: 'Chicago Bulls',
                        height:'6ft-4in',
                        weight:'220lbs',
                        position:'Point Guard',
                        age:34
                  }
      ]
        return knex('players').insert(players);
    });
};
