import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guardian } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static USER_URL = environment.baseUrl + 'users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Guardian[]>{
    return this.http.get<Guardian[]>(UserService.USER_URL);
  }

  getUserById(id: number): Observable<Guardian>{
    console.log(this.http.get<Guardian>(`${UserService.USER_URL}/${id}`));
    return this.http.get<Guardian>(`${UserService.USER_URL}/${id}`);
  }

  postUser(guardian): Observable<any>{
    return this.http.post<any>(UserService.USER_URL, guardian);
  }
  putUser(guardian): Observable<any>{
    return this.http.put<any>(`${UserService.USER_URL}/${guardian.id}`, guardian);
  }
  deleteUserById(id: number): Observable<void> {
    return this.http.delete<void>(`${UserService.USER_URL}/${id}`);
  }
}
