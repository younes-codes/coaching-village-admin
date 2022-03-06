import {Component, OnInit} from '@angular/core';
import {HttpServices} from "../services/http.services";
import {User} from "../create-user/create-user.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  users: User[] | undefined;
  numberOfUsers: number | undefined;

  constructor(private httpService: HttpServices) {
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  private fetchUser(): void {
    this.httpService.fetchUsers()
      .subscribe((users) => {
        this.users = users[0];
        this.numberOfUsers = this.users?.length;
      })
  }

}
