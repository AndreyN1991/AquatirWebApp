import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    apiUrl: string = 'https://localhost:44316/api/';

    constructor(private http: HttpClient) {}

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