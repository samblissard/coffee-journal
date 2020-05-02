import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeList: Coffee[];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getAll().subscribe((coffeeList) => {
      this.coffeeList = coffeeList;
    });
  }
}
