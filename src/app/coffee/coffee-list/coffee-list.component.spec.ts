import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../services/coffee.service';
import { Observable, of } from 'rxjs';
import { Coffee } from '../models/coffee';
import { Component } from '@angular/core';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let mockCoffeeService: jasmine.SpyObj<CoffeeService>;

  beforeEach(async(() => {
    let fakeCoffee: Coffee[] = [
      {
        id: 1,
        name: 'Good coffee',
        roaster: 'Good',
        tastingNotes: [],
        roast: 'Dark',
      },
    ];

    mockCoffeeService = jasmine.createSpyObj('CoffeeService', ['getAll']);
    mockCoffeeService.getAll.and.returnValue(of(fakeCoffee));

    TestBed.configureTestingModule({
      providers: [
        {
          provide: CoffeeService,
          useValue: mockCoffeeService,
        },
      ],
      declarations: [CoffeeListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
