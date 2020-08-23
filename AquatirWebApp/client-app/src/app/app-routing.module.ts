import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'goo',
    loadChildren: () =>
      import('./components/goo/goo.module').then((m) => m.GooModule),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./components/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./components/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
