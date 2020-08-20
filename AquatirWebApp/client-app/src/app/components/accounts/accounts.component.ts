import { Component, OnInit } from '@angular/core';
import { GooService, Account } from 'src/app/services/goo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'uGoo', 'accountName', 'action'];
  dataSource: Observable<Account[]>;

  constructor(private gooService: GooService) {}

  ngOnInit(): void {
    this.refresh();
  }

  delete(id: number): void {
    this.gooService.deleteAccount(id).subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.dataSource = this.gooService.getAccounts();
  }
}
