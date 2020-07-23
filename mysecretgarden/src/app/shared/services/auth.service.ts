import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable({providedIn: 'root'})
export class AuthService {
  private static LOGIN_URL = environment.baseUrl + 'login';
  private static GET_ME_URL = environment.baseUrl + 'users/me';
  token;
  user: User;
  constructor(private http: HttpClient,
              private router: Router) { }

              login(user: {username: string, password: string}){
                return this.http.post(AuthService.LOGIN_URL, user, {observe: 'response'}).subscribe((resp) => {
                  localStorage.setItem('token', resp.headers.get('Authorization'));
                  this.token = localStorage.getItem('token');
                  this.http.get(AuthService.GET_ME_URL).subscribe(data => {
                    this.user = data;
                    localStorage.setItem('userRole', this.user.role);
                    localStorage.setItem('userId', this.user.id.toString());
                    if (this.token != null && localStorage.getItem('userRole') === 'admin'){
                      this.router.navigateByUrl('/');
                    } else if (this.token != null){
                      this.router.navigateByUrl('/' + +localStorage.getItem('userId'));
                    }
                  });
                });
              }

              removeToken(){
                localStorage.removeItem('token');
                localStorage.removeItem('userRole');
                localStorage.removeItem('userId');
              }
}
