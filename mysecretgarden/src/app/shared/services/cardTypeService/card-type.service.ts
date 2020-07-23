import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardType } from '../../classes/card-type';

@Injectable({
  providedIn: 'root'
})
export class CardTypeService {

  private static CARD_TYPE_URL = environment.baseUrl + 'cards';

  constructor(private http: HttpClient) { }

  getAllCardTypes(): Observable<CardType[]>{
    return this.http.get<CardType[]>(CardTypeService.CARD_TYPE_URL );
  }

  getCardTypeById(id: number): Observable<CardType>{
    return this.http.get<CardType>(`${CardTypeService.CARD_TYPE_URL }/${id}`);
  }

  postCardType(card): Observable<any>{
    return this.http.post<any>(CardTypeService.CARD_TYPE_URL , card);
  }
  putCardTypeById(card): Observable<any>{
    return this.http.put<any>(`${CardTypeService.CARD_TYPE_URL }/${card.id}`, card);
  }
  deleteCardTypeById(id: number): Observable<void> {
    return this.http.delete<void>(`${CardTypeService.CARD_TYPE_URL }/${id}`);
  }
}
