import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    apiUrl: string = 'https://localhost:44316/api/';

    constructor(private http: HttpClient) {}

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