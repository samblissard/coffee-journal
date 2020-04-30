import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeListComponent,
    JournalEntryListComponent,
    JournalEntryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
