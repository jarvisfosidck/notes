import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
//import { DATA } from "../../data";
import { DataService } from "../../data.service";
import { CountdownTimerComponent }  from './countdown-timer.component';
import { MissionService }     from './mission.service';


@Component({
  selector: 'new-page',
  templateUrl: './new_page.component.html',
  styleUrls: ['./new_page.component.scss'],
  providers: [MissionService, DataService]
})
export class NewPageComponent implements OnInit {

  ngOnInit(): void {
      this.getData();
    }
  constructor(private missionService: MissionService, private dataService: DataService) {
      missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });

  }
  getData(): void {
    this.dataService
        .getData()
        .then(data => this.data = data);
  }
  data = [];
  master: string = 'Space Rainbow Cats';
  voters = ['a','b','c'];
  agreed = 0;
  disagreed = 0;
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;



  //console.log(data);
  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
export class CountdownLocalVarParentComponent { }

export class CountdownViewChildParentComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
