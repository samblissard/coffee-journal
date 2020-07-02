import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryFormComponent } from './journal-entry-form.component';
import { JournalEntryService } from '../services/journal-entry.service';

describe('JournalEntryFormComponent', () => {
  let component: JournalEntryFormComponent;
  let fixture: ComponentFixture<JournalEntryFormComponent>;
  let mockService: jasmine.SpyObj<JournalEntryService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JournalEntryFormComponent],
      providers: [
        {
          provide: JournalEntryService,
          useValue: mockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
