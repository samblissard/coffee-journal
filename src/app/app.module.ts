import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoffeeService } from './services/coffee.service';
import { MaterialModule } from './material.module';
import { CoffeeModule } from './coffee/coffee.module';
import { JournalEntryModule } from './journal-entry/journal-entry.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CoffeeModule,
    JournalEntryModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
