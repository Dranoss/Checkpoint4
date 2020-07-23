import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUserModel = {lastName: '', firstName: '', username: '', password: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.newUserModel);
    this.authService.signUp(this.newUserModel).subscribe();
  }
}
