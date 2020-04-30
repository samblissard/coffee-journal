import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeList: Coffee[] = [
    {
      name: 'Mokka-Java Blend',
      company: 'Happy Mug',
      descriptors: ['Mild Fruit', 'Sweet'],
      roast: 'Medium roast',
    },
    {
      name: 'Steadfast Java Island',
      company: 'Happy Mug',
      descriptors: ['Dark Chocolate', 'Hazelnut', 'Creamy'],
      roast: 'Dark roast',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
