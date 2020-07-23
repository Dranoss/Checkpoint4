import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../classes/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private static CARD_URL = environment.baseUrl + 'cards';

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(CardService.CARD_URL);
  }

  getCardById(id: number): Observable<Card>{
    return this.http.get<Card>(`${CardService.CARD_URL}/${id}`);
  }

  postCard(card): Observable<any>{
    return this.http.post<any>(CardService.CARD_URL, card);
  }
  putCardById(card): Observable<any>{
    return this.http.put<any>(`${CardService.CARD_URL}/${card.id}`, card);
  }
  deleteCardById(id: number): Observable<void> {
    return this.http.delete<void>(`${CardService.CARD_URL}/${id}`);
  }
}
