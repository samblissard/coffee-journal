import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailedComponent } from './coffee-detailed/coffee-detailed.component';

const routes: Routes = [
  {
    path: 'coffee',
    component: CoffeeListComponent,
  },
  {
    path: 'coffee/:id',
    component: CoffeeDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeRoutingModule {}
