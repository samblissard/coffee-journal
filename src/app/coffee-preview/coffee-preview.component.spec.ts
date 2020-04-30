import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePreviewComponent } from './coffee-preview.component';

describe('CoffeePreviewComponent', () => {
  let component: CoffeePreviewComponent;
  let fixture: ComponentFixture<CoffeePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
