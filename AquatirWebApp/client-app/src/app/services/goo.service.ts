import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Goo {
  uGoo?: number;
  cGoo: string;
}

@Injectable({
  providedIn: 'root',
})
export class GooService {
  constructor(private http: HttpClient) {}

  getGoo(): Observable<Goo[]> {
    return this.http.get<Goo[]>('https://localhost:44316/api/goo');
  }

  postGoo(goo: Goo): Observable<Goo> {
    return this.http.post<Goo>('https://localhost:44316/api/goo', goo);
  }

  deleteGoo(id: number): Observable<Goo> {
    return this.http.delete<Goo>(`https://localhost:44316/api/goo/${id}`);
  }
}
