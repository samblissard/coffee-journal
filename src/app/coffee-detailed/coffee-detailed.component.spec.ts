import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDetailedComponent } from './coffee-detailed.component';

describe('CoffeeDetailedComponent', () => {
  let component: CoffeeDetailedComponent;
  let fixture: ComponentFixture<CoffeeDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
