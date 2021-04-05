import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'uGoo', 'accountName', 'action'];
  dataSource: Observable<Account[]>;

  constructor(private service: AccountService) {}

  ngOnInit(): void {
    this.refresh();
  }

  delete(id: number): void {
    this.service.deleteAccount(id).subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.dataSource = this.service.getAccounts();
  }
}
