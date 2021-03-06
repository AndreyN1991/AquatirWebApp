import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';

import { GooService } from 'src/app/services/goo.service';
import { Goo } from 'src/app/models/goo.model';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css'],
  animations: [
    trigger('zoomAnimation', [
      transition(
        'void => *',
        useAnimation(zoomIn, { params: { timing: 0.3 } })
      ),
    ]),
  ],
})
export class AcountComponent implements OnInit {
  @Output() onAdd: EventEmitter<Account> = new EventEmitter<Account>();
  accountName: string = '';
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  dataOptions: Goo[];

  constructor(private gooService: GooService, private accService: AccountService) {}

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
      this.accService
        .postAccount({
          uGoo: this.dataOptions.find((x) => x.cGoo === this.myControl.value)
            .uGoo,
          accountName: this.accountName,
        })
        .subscribe((acc) => {
          this.onAdd.emit(acc);
        });
    }
  }
}
