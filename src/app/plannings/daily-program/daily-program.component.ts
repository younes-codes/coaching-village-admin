import {Component, Input, OnInit} from '@angular/core';
import {Planning} from "../plannings.data";

@Component({
  selector: 'app-daily-program',
  templateUrl: './daily-program.component.html',
  styleUrls: ['./daily-program.component.scss']
})
export class DailyProgramComponent implements OnInit {

  @Input() planning: Planning;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDayInFr = (dayEng: string): string => {
    const days = {
      'monday': 'lundi',
      'tuesday': 'mardi',
      'wednesday': 'mercredi',
      'thursday': 'jeudi',
      'friday': 'vendredi',
      'saturday': 'samedi',
      'sunday': 'dimanche',
    }
    // @ts-ignore
    return days[dayEng];
  }

}
