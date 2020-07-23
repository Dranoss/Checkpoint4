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

  getAllProjects(): Observable<CardType[]>{
    return this.http.get<CardType[]>(CardTypeService.CARD_TYPE_URL );
  }

  getProjectById(id: number): Observable<CardType>{
    return this.http.get<CardType>(`${CardTypeService.CARD_TYPE_URL }/${id}`);
  }

  postProject(card): Observable<any>{
    return this.http.post<any>(CardTypeService.CARD_TYPE_URL , card);
  }
  putProjectById(card): Observable<any>{
    return this.http.put<any>(`${CardTypeService.CARD_TYPE_URL }/${card.id}`, card);
  }
  deleteProjectById(id: number): Observable<void> {
    return this.http.delete<void>(`${CardTypeService.CARD_TYPE_URL }/${id}`);
  }
}
