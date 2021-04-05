import { Component, OnInit } from '@angular/core';
import { GooService } from 'src/app/services/goo.service';
import { Transaction } from 'src/app/models/transaction.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = [
    'transactionId',
    'accountId',
    'ammount',
    'io',
    'transactionDate',
    'action',
  ];
  dataSource: Observable<Transaction[]>;

  constructor(private gooService: GooService) {}

  ngOnInit(): void {
    this.refresh();
  }

  delete(id: number): void {
    this.gooService.deleteTransaction(id).subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.dataSource = this.gooService.getTransactions();
  }
}
