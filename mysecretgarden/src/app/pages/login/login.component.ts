import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = {username: '', password: ''};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.login(this.userModel);
  }
}
