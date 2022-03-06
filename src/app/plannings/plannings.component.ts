import {Component, OnInit} from '@angular/core';
import {HttpServices} from "../services/http.services";
import {User} from "../create-user/create-user.component";
import {Planning, PLANNINGS} from "./plannings.data";

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.scss']
})

export class PlanningsComponent implements OnInit {
  users: User[] = [];
  groups: number[] = [];
  isLoading = true;

  constructor(private httpService: HttpServices) {
  }

  getPlanning(group: number): Planning {
    return PLANNINGS.find(g => g.group === group)!;
  }

  ngOnInit(): void {
    this.httpService.fetchUsers()
      .subscribe((users) => {
        this.users = users[0];
        const arrayGroup: number[] = [];
        this.users.forEach(u => {
          arrayGroup.push(u.group);
        })
        const maxGroups = Math.max(...arrayGroup);
        for (let i = 1; i <= maxGroups; i++) {
          this.groups.push(i);
        }
        this.groups = [...new Set(arrayGroup)].sort();
        this.isLoading = false;
      })
  }

}
