import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../create-user/create-user.component";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

const EMPTY_SESSIONS = {
  'developpe-couche': [],
  'incline': [],
}

@Injectable({providedIn: 'root'})
export class HttpServices {
  constructor(private http: HttpClient) {
  }


  createEmptySessions(userId: string) {
    return this.http.post
    (`${environment.urlAPI}/sessions/create-sessions`,
      {sessions: EMPTY_SESSIONS, userId}
    );
  }

  createUser(user: User) {
    return this.http.post<{ userId: string, user: User }>
    (`${environment.urlAPI}/admin/create-user`, {user})
  }


  editUser(user: User) {
    return this.http.put(`${environment.urlAPI}/admin/edit-user/user._id`, {user});
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
}
