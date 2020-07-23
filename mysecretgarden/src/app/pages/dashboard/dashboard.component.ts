import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/userService/user.service';
import { CardService } from 'src/app/shared/services/cardService/card.service';
import { CardTypeService } from 'src/app/shared/services/cardTypeService/card-type.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/shared/classes/card';
import { CardType } from 'src/app/shared/classes/card-type';
import { Guardian } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userRole: string;

  user: Guardian;
  userId: number;
  card: Card;
  cards: Card[];
  cardType: CardType;
  cardTypes: CardType[];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private cardService: CardService,
              private cardTypeService: CardTypeService
    ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => {
          this.userId = +paramMap.get('userId');
          this.initializeUser(this.userId);
          console.log(this.userId);
      });
  }

  initializeUser(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  initializeCards(id: Number){
  }

}
