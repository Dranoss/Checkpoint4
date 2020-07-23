import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static USER_URL = environment.baseUrl + 'users';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<User[]>{
    return this.http.get<User[]>(UserService.USER_URL);
  }

  getProjectById(id: number): Observable<User>{
    return this.http.get<User>(`${UserService.USER_URL}/${id}`);
  }

  postProject(user): Observable<any>{
    return this.http.post<any>(UserService.USER_URL, user);
  }
  putProjectById(user): Observable<any>{
    return this.http.put<any>(`${UserService.USER_URL}/${user.id}`, user);
  }
  deleteProjectById(id: number): Observable<void> {
    return this.http.delete<void>(`${UserService.USER_URL}/${id}`);
  }
}
