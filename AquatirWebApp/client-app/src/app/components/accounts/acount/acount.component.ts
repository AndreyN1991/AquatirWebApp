import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { GooService, Goo, Account } from 'src/app/services/goo.service';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css'],
})
export class AcountComponent implements OnInit {
  @Output() onAdd: EventEmitter<Account> = new EventEmitter<Account>();
  accountName: string = '';
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  dataOptions: Goo[];
  account: Account;

  constructor(private gooService: GooService) {}

  ngOnInit(): void {
    this.gooService.getGoo().subscribe((result) => {
      this.dataOptions = result;

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.dataOptions
      .filter((option) => option.cGoo.toLowerCase().indexOf(filterValue) === 0)
      .map(function (x) {
        return x.cGoo;
      });
  }

  Add(): void {
    if (this.accountName.trim() && this.myControl.value.trim()) {
      this.gooService
        .postAccount({
          uGoo: this.dataOptions.find((x) => x.cGoo === this.myControl.value)
            .uGoo,
          AccountName: this.accountName,
        })
        .subscribe((acc) => {
          this.onAdd.emit(acc);
        });
    }
  }
}
