// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-match-schedule',
//   templateUrl: './match-schedule.component.html',
//   styleUrls: ['./match-schedule.component.css']
// })
// export class MatchScheduleComponent {

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Match {
  date: string;
  day: string;
  type: string;
  Stadium: {
    [key: string]: {
      name: string;
      first_half?: {
        group: string;
        id: number;
        time: string;
        data: string;
      };
      second_half?: {
        group: string;
        id: number;
        time: string;
        data: string;
      };
    };
  };
}

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent implements OnInit {
  matches: Match[] = [ 

    { 

      date: "10 November", 

      day: "Friday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium", 

          first_half: { 

            group: "A", 

            id:2, 

            time:"16:00", 

            data: "PAN vs MAR" 

          }, 

          second_half: { 

            group: "A", 

            id:1, 

            time:"19:00", 

            data: "IDN vs ECU" 

          } 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium", 

          first_half: { 

            group: "B", 

            id:4, 

            time:"16:00", 

            data: "MLI vs UZB" 

          }, 

          second_half: { 

            group: "B", 

            id:3, 

            time:"19:00", 

            data: "ESP vs CAN" 

          } 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium" 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium" 

        } 

      } 

    }, 

    { 

      date: "11 November", 

      day: "Saturday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "C", 

            id:6, 

            time:"16:00", 

            data: "NCL vs ENG" 

          }, 

          second_half: { 

            group: "C", 

            id:5, 

            time:"19:00", 

            data: "BRA vs IRN" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "D", 

            id:7, 

            time:"16:00", 

            data: "JPN vs POL" 

          }, 

          second_half: { 

            group: "D", 

            id:8, 

            time:"19:00", 

            data: "ARG vs SEN" 

          } 

        } 

      } 

    }, 

    { 

      date: "12 November", 

      day: "Sunday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "E", 

            id:9, 

            time:"16:00", 

            data: "FRA vs BFA" 

          }, 

          second_half: { 

            group: "E", 

            id:10, 

            time:"19:00", 

            data: "KOR vs USA" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "F", 

            id:12, 

            time:"16:00", 

            data: "VEN vs NZL" 

          }, 

          second_half: { 

            group: "F", 

            id:11, 

            time:"19:00", 

            data: "MEX vs GER" 

          } 

        } 

      } 

    }, 

    { 

      date: "13 November", 

      day: "Monday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium", 

          first_half: { 

            group: "A", 

            id:14, 

            time:"16:00", 

            data: "MAR vs ECU" 

          }, 

          second_half: { 

            group: "A", 

            id:13, 

            time:"19:00", 

            data: "IDN vs PAN" 

          } 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium", 

          first_half: { 

            group: "B", 

            id:15, 

            time:"16:00", 

            data: "ESP vs MLI" 

          }, 

          second_half: { 

            group: "B", 

            id:16, 

            time:"19:00", 

            data: "UZB vs CAN" 

          } 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium" 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium" 

        } 

      } 

    }, 

    { 

      date: "14 November", 

      day: "Tuesday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "C", 

            id:17, 

            time:"16:00", 

            data: "BRA vs NCL" 

          }, 

          second_half: { 

            group: "C", 

            id:18, 

            time:"19:00", 

            data: "ENG vs IRN" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "D", 

            id:20, 

            time:"16:00", 

            data: "SEN vs POL" 

          }, 

          second_half: { 

            group: "D", 

            id:19, 

            time:"19:00", 

            data: "JPN vs ARG" 

          } 

        } 

      } 

    }, 

    { 

      date: "15 November", 

      day: "Wednesday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "E", 

            id:22, 

            time:"16:00", 

            data: "USA vs BFA" 

          }, 

          second_half: { 

            group: "E", 

            id:21, 

            time:"19:00", 

            data: "FRA vs KOR" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "F", 

            id:23, 

            time:"16:00", 

            data: "MEX vs VEN" 

          }, 

          second_half: { 

            group: "F", 

            id:24, 

            time:"19:00", 

            data: "NZL vs GER" 

          } 

        } 

      } 

    }, 

    { 

      date: "16 November", 

      day: "Thursday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium", 

          first_half: { 

            group: "B", 

            id:28, 

            time:"16:00", 

            data: "CAN vs MAI" 

          }, 

          second_half: { 

            group: "A", 

            id:25, 

            time:"19:00", 

            data: "MAR vs IDN" 

          } 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium", 

          first_half: { 

            group: "B", 

            id:27, 

            time:"16:00", 

            data: "UZB vs ESP" 

          }, 

          second_half: { 

            group: "A", 

            id:26, 

            time:"19:00", 

            data: "ECU vs PAN" 

          } 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium" 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium" 

        } 

      } 

    }, 

    { 

      date: "17 November", 

      day: "Friday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "D", 

            id:32, 

            time:"16:00", 

            data: "POL vs ARG" 

          }, 

          second_half: { 

            group: "C", 

            id:29, 

            time:"19:00", 

            data: "ENG vs BRA" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "D", 

            id:31, 

            time:"16:00", 

            data: "SEN vs JPN" 

          }, 

          second_half: { 

            group: "C", 

            id:30, 

            time:"19:00", 

            data: "IRN vs NCL" 

          } 

        } 

      } 

    }, 

    { 

      date: "18 November", 

      day: "Saturday", 

      type: "Group Matches", 

      Stadium: { 

        SURABAYA: { 

          name: "Gelora Bung Tomo Stadium" 

        }, 

        SURAKARTA: { 

          name: "Manahan Stadium" 

        }, 

        JAKARTA: { 

          name: "Jakarta International Stadium", 

          first_half: { 

            group: "F", 

            id:36, 

            time:"16:00", 

            data: "GER vs VEN" 

          }, 

          second_half: { 

            group: "E", 

            id:33, 

            time:"19:00", 

            data: "USA vs FRA" 

          } 

        }, 

        BANDUNG: { 

          name: "Si Jalak Harupat Stadium", 

          first_half: { 

            group: "F", 

            id:35, 

            time:"16:00", 

            data: "NZL vs MEX" 

          }, 

          second_half: { 

            group: "E", 

            id:34, 

            time:"19:00", 

            data: "BFA vs KOR" 

          } 

        } 

      } 

    }
  ] ;
  
  stadiums = [
    { name: 'Surabaya' },
    { name: 'Surakarta' },
    { name: 'Jakarta' },
    { name: 'Bandung' }
  ];

  constructor() { }

  ngOnInit(): void {
    //this.fetchMatches();
  }

  // fetchMatches(): void {
  //   this.http.get<Match[]>('https://api.example.com/matches')
  //     .subscribe(data => this.matches = data);
  // }
}
