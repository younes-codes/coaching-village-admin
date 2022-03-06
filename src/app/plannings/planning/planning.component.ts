import {Component, Input, OnInit} from '@angular/core';
import {Planning} from "../plannings.data";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  @Input() group: number;
  @Input() planning: Planning;


  constructor() {
  }

  ngOnInit(): void {
  }

  updatePlanning(group: number) {
  }
}
