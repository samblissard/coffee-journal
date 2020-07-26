import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeDetailedComponent } from './coffee-detailed/coffee-detailed.component';
import { CoffeePreviewComponent } from './coffee-preview/coffee-preview.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeRoutingModule } from './coffee-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    CoffeeDetailedComponent,
    CoffeePreviewComponent,
    CoffeeListComponent,
  ],
  imports: [CommonModule, CoffeeRoutingModule, MaterialModule],
})
export class CoffeeModule {}
