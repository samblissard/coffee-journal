import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

import { HeaderComponent } from './header/header.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';
import { CoffeeDetailedComponent } from './coffee-detailed/coffee-detailed.component';
import { CoffeePreviewComponent } from './coffee-preview/coffee-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeListComponent,
    JournalEntryListComponent,
    JournalEntryFormComponent,
    CoffeeDetailedComponent,
    CoffeePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
