import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpServices} from "../services/http.services";
import {User} from "../create-user/create-user.component";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  userId: string;
  users: User[] = [];
  user: User;
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private httpService: HttpServices,
              private router: Router
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
      })
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    const _id = this.userId;
    this.user = {_id, ...form.value};
    this.httpService.editUser({...this.user}).subscribe(_ => {
      if (form.valid) {
        form.reset();
        this.router.navigate(['/users']);
      }
    });
  }

  onSearchChange(searchValue: Event): void {
    if (!this.user.height && !this.user.weight) {
      return;
    }
    this.user.imc = this.getImc(this.user.weight, this.user.height);
  }

  onTimeStaySet() {
    this.user.price = <number>this.getPrice(this.user.timeStay);
  }

  getPrice(timeStay: number): number | null {
    if (timeStay > 1 && timeStay < 8) {
      return 650;
    } else if (timeStay > 7 && timeStay < 15) {
      return 1250;
    } else {
      return 2000;
    }
  }

  onDiscountSet() {
    this.user.price = +(this.user.price - (this.user.price * (this.user.discount / 100))).toFixed(0);
  }


  private getImc = (weight: number, height: number): number => {
    const h = height / 100;
    return +((weight) / (h * h)).toFixed(2);
  }
}
