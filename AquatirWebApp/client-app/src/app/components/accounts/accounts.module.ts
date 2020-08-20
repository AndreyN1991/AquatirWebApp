import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialContainerModule } from 'src/app/modules/material-container/material-container.module';
import { AccountsComponent } from './accounts.component';
import { AcountComponent } from './acount/acount.component';

@NgModule({
  declarations: [AccountsComponent, AcountComponent],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    MaterialContainerModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountsComponent,
        children: [{ path: 'account', component: AcountComponent }],
      },
    ]),
  ],
})
export class AccountsModule {}
