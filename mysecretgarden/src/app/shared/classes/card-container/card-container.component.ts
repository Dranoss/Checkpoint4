import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input()
  cardsModel: Card[];
  constructor() { }

  ngOnInit(): void {
  }

}
