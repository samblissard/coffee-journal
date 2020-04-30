import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';
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
  {
    path: 'entries',
    component: JournalEntryListComponent,
  },
  {
    path: 'entries/new',
    component: JournalEntryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
