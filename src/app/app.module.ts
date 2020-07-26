import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';
import { CoffeeService } from './services/coffee.service';
import { MaterialModule } from './material.module';
import { CoffeeModule } from './coffee/coffee.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalEntryListComponent,
    JournalEntryFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoffeeModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
