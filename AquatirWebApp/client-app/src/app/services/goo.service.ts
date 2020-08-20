import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Goo {
  uGoo?: number;
  cGoo: string;
}

export interface Account {
  AccountId?: number;
  uGoo: number;
  AccountName: string;
  wrGoo?: Goo;
}

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

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl + 'accounts');
  }

  postAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl + 'accounts', account);
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(`${this.apiUrl}accounts/${id}`);
  }
}
