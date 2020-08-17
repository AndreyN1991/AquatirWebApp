import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialContainerModule } from 'src/app/modules/material-container/material-container.module';
import { GooComponent } from './goo.component';
import { GoocardComponent } from './goocard/goocard.component';

@NgModule({
  declarations: [GooComponent, GoocardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialContainerModule,
    RouterModule.forChild([
      {
        path: '',
        component: GooComponent,
        children: [{ path: 'add', component: GoocardComponent }],
      },
    ]),
  ],
})
export class GooModule {}
