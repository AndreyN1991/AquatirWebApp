import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialContainerModule } from 'src/app/modules/material-container/material-container.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [TransactionsComponent, TransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialContainerModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsComponent,
        children: [
          { path: 'transaction', component: TransactionComponent },
          { path: 'transaction/:id', component: TransactionComponent },
        ],
      },
    ]),
  ],
})
export class TransactionsModule {}
