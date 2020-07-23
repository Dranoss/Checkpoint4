import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guardian } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})

@Injectable({providedIn: 'root'})
export class AuthService {
  private static LOGIN_URL = environment.baseUrl + 'login';
  private static SIGN_UP_URL = environment.baseUrl + 'users/sign-up';
  private static GET_ME_URL = environment.baseUrl + 'users/me';
  token;
  user: Guardian;
  newUser: Guardian;
  constructor(private http: HttpClient,
              private router: Router) { }

              login(user: {username: string, password: string}){
                return this.http.post(AuthService.LOGIN_URL, user, {observe: 'response'}).subscribe((resp) => {
                  localStorage.setItem('token', resp.headers.get('Authorization'));
                  this.token = localStorage.getItem('token');
                  console.log(this.token);
                  this.http.get(AuthService.GET_ME_URL).subscribe(data => {
                    this.user = data;
                    localStorage.setItem('userId', this.user.id.toString());
                    this.router.navigateByUrl('dashboard/' + +localStorage.getItem('userId'));
                    });
                  });
              }

              signUp(newUser: {firstName: string, lastName: string, username: string, password: string}): Observable<any>{
                console.log(newUser);
                return this.http.post(AuthService.SIGN_UP_URL, newUser);
              }

              removeToken(){
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
              }
}
