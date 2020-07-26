import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';
import { JournalEntryRoutingModule } from './journal-entry-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [JournalEntryListComponent, JournalEntryFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JournalEntryRoutingModule,
    MaterialModule,
  ],
})
export class JournalEntryModule {}
