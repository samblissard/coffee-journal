import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';

const routes: Routes = [
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'entries', component: JournalEntryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
