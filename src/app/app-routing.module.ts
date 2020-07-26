import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';

const routes: Routes = [
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
