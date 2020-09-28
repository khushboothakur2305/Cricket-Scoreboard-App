import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { upcommingMatches } from '../upcoming-matches/Interface/upcomming-matches';
@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.scss'],
})
export class UpcomingMatchesComponent implements OnInit {
  apikey = 'apikey=';
  key = 'AXnrIdLK7SWj5r8YxhiJ6SKWwW12';
  UpcommingMatches: upcommingMatches[] = [];
  ongoingMatches: upcommingMatches[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(`https://cricapi.com/api/matches/?${this.apikey}${this.key}`);

    this.http
      .get<{
        creditsLeft: number;
        matches: upcommingMatches[];
        provider: {};
        ttl: number;
        v: string;
      }>(`https://cricapi.com/api/matches/?${this.apikey}${this.key}`)
      .subscribe((re) => {
        re.matches.map((matchStart) => {
          if (matchStart.matchStarted === true) {
            this.ongoingMatches.push(matchStart);
          } else {
            this.UpcommingMatches.push(matchStart);
          }
        });
        console.log('upcommin', this.UpcommingMatches);
        console.log('ongoing', this.ongoingMatches);
      });
  }
}
