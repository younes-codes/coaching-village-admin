import {Component, OnInit} from '@angular/core';
import {User} from "../create-user/create-user.component";
import {HttpServices} from "../services/http.services";
import {Router} from "@angular/router";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    isLoading = true;
    checked = true;
    label = this.checked ? 'activé' : 'desactivé';

    constructor(private httpService: HttpServices, private router: Router) {
    }

    ngOnInit(): void {
        this.fetchUser();
    }

    private fetchUser(): void {
        this.httpService.fetchUsers()
            .subscribe((users) => {
                this.users = users[0];
                this.isLoading = false;
            })
    }

    getConfirm = (): boolean => confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');


    deleteUserById(_id: string) {
        const confirmation = this.getConfirm();
        if (confirmation) {
            this.httpService.deleteUserById(_id).subscribe(res => {
                this.fetchUser();
            })
        }
    }

    editUserById(_id: string) {
        return this.router.navigate(['/update-user/' + _id]);
    }

    validateUser(isValidated: boolean, _id: string) {
        return this.httpService.validateUser(isValidated, _id).subscribe(res => {
            console.log(res);
        }, error => {
            console.log(error)
        })
    }

    toggle($event: MatSlideToggleChange, _id: string) {
        this.validateUser($event.checked, _id);
    }
}
