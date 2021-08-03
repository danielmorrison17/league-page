// 3 managers as an example (remove the // before each line to make it live code)
export const managers = [
   {
     "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Daniel Morrison",
     "location": "Dallas, TX",
     "bio": "Commisioner since 2009",
     "photo": "/managers/Daniel.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "dal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Brady Hogan", // Can be anything (usually your rival's name)
       link: 5, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4046, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Win now, because why wait?",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Robert Sandoval",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Houston, TX",
     "bio": "Bio Here...",
     "photo": "/managers/Robert.jpg", // done
     "fantasyStart": 2012, // when did the manager start playing fantasy football
     "favoriteTeam": "hou", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Adam Dishongh", // Can be anything (usually your rival's name)
       link: 2, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5849, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Dishongh",
     "location": "Oklahoma",
     "bio": "Enter Bio Here",
     "photo": "/managers/Adam.jpg", // done
     "fantasyStart": 2011, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Robert Sandoval", // Can be anything (usually your rival's name)
       link: 3, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4984, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Team Philosophy Here...",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
]
