import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePreviewComponent } from './coffee-preview.component';

describe('CoffeePreviewComponent', () => {
  let component: CoffeePreviewComponent;
  let fixture: ComponentFixture<CoffeePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeePreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePreviewComponent);
    component = fixture.componentInstance;
    component.coffee = { name: '', company: '', descriptors: [], roast: '' };
    fixture.detectChanges();
  });

  it('should create if coffee input is received', () => {
    expect(component).toBeTruthy();
  });

  it('should throw error if coffee input is not received', () => {
    component.coffee = null;

    let error: TypeError;
    try {
      component.ngOnInit();
    } catch (e) {
      error = e;
    }

    expect(error).toBeTruthy();
    expect(error.message).toBe('coffee is required');
  });
});
