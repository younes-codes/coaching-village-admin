import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../create-user/create-user.component";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Subject, throwError} from "rxjs";

const EMPTY_SESSIONS = {
    'developpe-couche': [],
    'incline': [],
}

@Injectable({providedIn: 'root'})
export class HttpServices {
    constructor(private http: HttpClient) {
    }

    error = new Subject<string>();

    createEmptySessions(userId: string) {
        return this.http.post
        (`${environment.urlAPI}/sessions/create-sessions`,
            {sessions: EMPTY_SESSIONS, userId}
        );
    }

    createUser(user: User) {
        return this.http.post<{ userId: string, user: User }>
        (`https://coaching-village-api.herokuapp.com/admin/create-user`, {user})
            .pipe(
                catchError((errorRes) => {
                    let errorMessage = 'Erreur inconnue';
                    if (!errorRes.error || !errorRes.error.data) {
                        return throwError(errorMessage);
                    }
                    switch (errorRes.error.data[0].msg) {
                        case 'EMAIL_FORMAT_INCORRECT':
                            errorMessage = 'Format de l\'email incorrect.';
                            break;
                        case 'EMAIL_EXISTS':
                            errorMessage = 'L\'adresse email existe déjà.'
                    }
                    return throwError(errorMessage)
                })
            )
    }


    editUser(user: User) {
        return this.http.put(`${environment.urlAPI}/admin/edit-user/${user._id}`, {user});
    }


    fetchUsers() {
        return this.http
            .get<User>(`${environment.urlAPI}/admin/users`)
            .pipe(map((fetchedPosts: User) => {
                // Transform Object to an Array
                return Object.values(fetchedPosts);
            }))
    }

    deleteUserById(id: string) {
        return this.http.delete(`${environment.urlAPI}/admin/delete-user/${id}`);
    }

    validateUser(isValidated: boolean, _id: string) {
        return this.http.get(`${environment.urlAPI}/admin/validate-user/${isValidated}/${_id}`);
    }
}
