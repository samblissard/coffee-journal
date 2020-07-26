import { Component, OnInit, Input } from '@angular/core';
import { Coffee } from '../../models/coffee';

@Component({
  selector: 'app-coffee-preview[coffee]',
  templateUrl: './coffee-preview.component.html',
  styleUrls: ['./coffee-preview.component.css'],
})
export class CoffeePreviewComponent implements OnInit {
  @Input() coffee: Coffee;

  ngOnInit(): void {
    if (!this.coffee) {
      throw new TypeError('coffee is required');
    }
  }
}
