import {Component, OnInit} from '@angular/core';
import {User} from "../create-user/create-user.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpServices} from "../services/http.services";
import {Planning, PLANNINGS} from "../plannings/plannings.data";

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.scss']
})
export class SeeUserComponent implements OnInit {


  userId: string;
  users: User[] = [];
  user: User;
  isLoading: boolean = true;
  planning: Planning;

  constructor(private route: ActivatedRoute,
              private httpService: HttpServices,
  ) {
  }

  ngOnInit(): void {
    this.fetchUser();
    this.userId = this.route.snapshot.params.userId;
  }

  private fetchUser(): void {
    this.httpService.fetchUsers()
      .subscribe((users) => {
        this.users = users[0];
        this.user = this.users.find(u => u._id === this.userId)!;
        this.isLoading = false;
      })
  }

}
