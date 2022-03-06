import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {
    HttpServices
} from "../services/http.services";
import {tap} from "rxjs/operators";


export interface User {
    _id: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string,
    height: number,
    weight: number,
    imc: number,
    timeStay: number,
    group: number,
    price: number,
    discount: number,
    paid: number,
    balance: number,
    sessions?: any,
    isValidated: boolean;
}


@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

    constructor(private httpService: HttpServices, private router: Router) {
    }

    users: User[] = [];
    imc: number = 0;
    weight: number;
    height: number;
    timeStay: number;
    price: number;
    discount: number;
    isLoading = false;
    errorMessage: string;

    onSubmit(form: NgForm) {
        this.isLoading = true;
        const user: User = {...form.value};

        this.httpService.createUser(user)
            .pipe(
                tap(resData => {
                    this.httpService
                        .createEmptySessions(resData.userId)
                        .subscribe();
                }))
            .subscribe(() => {
                    this.isLoading = false;
                },
                error => {
                    this.isLoading = false;
                    this.errorMessage = error;
                }
            );
        this.errorMessage = '';
    }

    private getImc = (weight: number, height: number): number => {
        const h = height / 100;
        return +((weight) / (h * h)).toFixed(2);
    }


    onSearchChange(searchValue: Event): void {
        if (!this.height && !this.weight) {
            return;
        }

        this.imc = this.getImc(this.weight, this.height);
    }

    onTimeStaySet() {
        this.price = CreateUserComponent.getPrice(this.timeStay);
    }

    static getPrice(timeStay: number): number {
        if (timeStay > 1 && timeStay < 8) {
            return 650;
        } else if (timeStay > 7 && timeStay < 15) {
            return 1250;
        } else {
            return 2000;
        }
    }

    onDiscountSet() {
        this.price = +(this.price - (this.price * (this.discount / 100))).toFixed(0);
    }

}
