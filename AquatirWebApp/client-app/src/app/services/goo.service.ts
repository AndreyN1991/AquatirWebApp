import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { transition } from '@angular/animations';

export interface Goo {
  uGoo?: number;
  cGoo: string;
}

export interface Account {
  accountId?: number;
  uGoo: number;
  accountName: string;
  wrGoo?: Goo;
}

export interface Transaction {
  transactionId?: number;
  accountId: number;
  accounts?: Account;
  ammount: number;
  io: boolean;
  transactionDate: Date;
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

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl + 'transactions');
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}transactions/${id}`);
  }

  postTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      this.apiUrl + 'transactions',
      transaction
    );
  }

  putTransaction(id: number, transaction: Transaction): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}transactions/${id}`, transaction);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.apiUrl}transactions/${id}`);
  }
}
