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

  getAllProjects(): Observable<Card[]>{
    return this.http.get<Card[]>(CardService.CARD_URL);
  }

  getProjectById(id: number): Observable<Card>{
    return this.http.get<Card>(`${CardService.CARD_URL}/${id}`);
  }

  postProject(card): Observable<any>{
    return this.http.post<any>(CardService.CARD_URL, card);
  }
  putProjectById(card): Observable<any>{
    return this.http.put<any>(`${CardService.CARD_URL}/${card.id}`, card);
  }
  deleteProjectById(id: number): Observable<void> {
    return this.http.delete<void>(`${CardService.CARD_URL}/${id}`);
  }
}
