import {Component, OnInit} from '@angular/core';
import {HttpServices} from "../services/http.services";
import {User} from "../create-user/create-user.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  users: User[];
  groups: number[] = [];

  constructor(private httpService: HttpServices) {
  }

  getUsersByGroup(group: number): User[] {
    return this.users.filter(u => u.group === group);
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.httpService.fetchUsers()
      .subscribe((users) => {
        this.users = users[0];
        const arrayGroup: number[] = [];
        this.users.forEach(u => {
          arrayGroup.push(u.group);
        });
        this.groups = [...new Set(arrayGroup)].sort();
      })
  }

}
