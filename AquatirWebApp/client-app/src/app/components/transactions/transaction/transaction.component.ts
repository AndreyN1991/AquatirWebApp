import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { Transaction } from 'src/app/models/transaction.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('zoomAnimation', [
      transition(
        'void => *',
        useAnimation(zoomIn, { params: { timing: 0.3 } })
      ),
    ]),
  ],
})
export class TransactionComponent implements OnInit {
  @Output() onAdd: EventEmitter<Transaction> = new EventEmitter<Transaction>();
  transactionAmmount: number = 0;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  dataOptions: Account[];
  transactionDate: Date;
  ioGroup: number = 0;
  transaction: Transaction;

  constructor(private trService: TransactionService, private accService: AccountService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.accService.getAccounts().subscribe((result) => {
      this.dataOptions = result;

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
    });

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.trService.getTransactionById(params.id).subscribe((result) => {
          this.transaction = result;
          this.myControl.setValue(
            this.transaction.accountId +
              ' - ' +
              this.transaction.accounts.accountName
          );
          this.transaction.io ? (this.ioGroup = 1) : (this.ioGroup = 2);
          this.transactionAmmount = this.transaction.ammount;
          this.transactionDate = this.transaction.transactionDate;
        });
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.dataOptions
      .filter(
        (option) => option.accountName.toLowerCase().indexOf(filterValue) === 0
      )
      .map(function (x) {
        return x.accountId + ' - ' + x.accountName;
      });
  }

  Add(): void {
    if (true) {
      if (this.transaction) {
        this.trService
          .putTransaction(this.transaction.transactionId, {
            transactionId: this.transaction.transactionId,
            accountId: this.dataOptions.find(
              (x) => x.accountId === +this.myControl.value.split(' ')[0]
            ).accountId,
            io: this.ioGroup === 1 ? true : false,
            ammount: this.transactionAmmount,
            transactionDate: this.transactionDate,
          })
          .subscribe((tr) => {
            this.onAdd.emit(tr);
          });
      } else {
        this.trService
          .postTransaction({
            accountId: this.dataOptions.find(
              (x) => x.accountId === +this.myControl.value.split(' ')[0]
            ).accountId,
            io: this.ioGroup === 1 ? true : false,
            ammount: this.transactionAmmount,
            transactionDate: this.transactionDate,
          })
          .subscribe((tr) => {
            this.onAdd.emit(tr);
          });
      }
    }
  }
}
