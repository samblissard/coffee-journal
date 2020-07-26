import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { JournalEntryFormComponent } from './journal-entry-form/journal-entry-form.component';
import { CoffeeDetailedComponent } from './coffee-detailed/coffee-detailed.component';
import { CoffeePreviewComponent } from './coffee-preview/coffee-preview.component';
import { CoffeeService } from './services/coffee.service';
import { MaterialModule } from './material.module';
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
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
