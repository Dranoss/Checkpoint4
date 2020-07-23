import { Component, OnInit, Input } from '@angular/core';
import { Guardian } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  userModel: Guardian;
  constructor() { }

  ngOnInit(): void {
    console.log(this.userModel);
  }

}
