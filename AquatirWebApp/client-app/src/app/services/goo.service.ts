import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goo } from 'src/app/models/goo.model';
import { Transaction } from 'src/app/models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class GooService {
  apiUrl: string = 'https://localhost:44316/api/';

  constructor(private http: HttpClient) {}

  getGoo(): Observable<Goo[]> {
    return this.http.get<Goo[]>(this.apiUrl + 'goo');
  }

  postGoo(goo: Goo): Observable<Goo> {
    return this.http.post<Goo>(this.apiUrl + 'goo', goo);
  }

  deleteGoo(id: number): Observable<Goo> {
    return this.http.delete<Goo>(`${this.apiUrl}goo/${id}`);
  }
}
