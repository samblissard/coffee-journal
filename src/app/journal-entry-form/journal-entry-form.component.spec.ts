import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryFormComponent } from './journal-entry-form.component';
import { JournalEntryService } from '../services/journal-entry.service';
import { of } from 'rxjs';
import { Coffee } from '../models/coffee';
import { CoffeeService } from '../services/coffee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JournalEntryListComponent } from '../journal-entry-list/journal-entry-list.component';

describe('JournalEntryFormComponent', () => {
  let component: JournalEntryFormComponent;
  let fixture: ComponentFixture<JournalEntryFormComponent>;
  let mockJournalEntryService: jasmine.SpyObj<JournalEntryService>;
  let mockCoffeeService: jasmine.SpyObj<CoffeeService>;

  beforeEach(async(() => {
    mockJournalEntryService = jasmine.createSpyObj('JournalEntryService', [
      'create',
    ]);
    let coffee: Coffee = {
      name: '',
      roaster: '',
      roast: '',
      id: 1,
      tastingNotes: [],
    };

    mockJournalEntryService.create.and.returnValue(of({ coffee: coffee }));

    mockCoffeeService = jasmine.createSpyObj('CoffeeService', ['getAll']);
    mockCoffeeService.getAll.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [JournalEntryFormComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'entries', component: JournalEntryListComponent },
        ]),
      ],
      providers: [
        {
          provide: JournalEntryService,
          useValue: mockJournalEntryService,
        },
        {
          provide: CoffeeService,
          useValue: mockCoffeeService,
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

  describe('coffee form', () => {
    beforeEach(() => {
      component.coffeeForm.controls.name.setValue('someValue');
      component.coffeeForm.controls.roaster.setValue('someValue');
      component.coffeeForm.controls.roast.setValue('someValue');
    });

    it('should be valid if required fields are entered', () => {
      expect(component.coffeeForm.invalid).toBeFalse();
    });

    it('should be invalid if name is not entered', () => {
      component.coffeeForm.controls.name.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });

    it('should be invalid if roaster is not entered', () => {
      component.coffeeForm.controls.roaster.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });

    it('should be invalid if roast is not entered', () => {
      component.coffeeForm.controls.roast.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });
  });

  describe('addTastingNote', () => {
    it('should add tasting note from form control to tastingNoteList', () => {
      const tastingNoteValue = 'tastingNote';
      component.coffeeForm.controls.tastingNote.setValue(tastingNoteValue);
      component.addTastingNote();
      expect(component.tastingNoteList).toContain(tastingNoteValue);
    });

    it('should reset tasting note form control', () => {
      const tastingNoteValue = 'tastingNote';
      component.coffeeForm.controls.tastingNote.setValue(tastingNoteValue);
      component.addTastingNote();
      expect(component.coffeeForm.controls.tastingNote.value).toBeNull();
    });
  });

  describe('removeTastingNote', () => {
    it('should remove item from tasting note list given valid index', () => {
      component.tastingNoteList = ['one', 'two', 'three'];
      component.removeTastingNote(0);
      expect(component.tastingNoteList).not.toContain('one');
      expect(component.tastingNoteList).toContain('two');
      expect(component.tastingNoteList).toContain('three');
    });

    const outOfBoundsIndexTestCases = [-1, 3];
    outOfBoundsIndexTestCases.forEach((index) => {
      it(`should not remove items from tasting note list given invalid index ${index}`, () => {
        component.tastingNoteList = ['one', 'two', 'three'];
        component.removeTastingNote(index);
        expect(component.tastingNoteList).toContain('one');
        expect(component.tastingNoteList).toContain('two');
        expect(component.tastingNoteList).toContain('three');
      });
    });
  });

  describe('submitForm', () => {
    it('should call journalEntryService create with form values', () => {
      component.submitForm();
      expect(mockJournalEntryService.create).toHaveBeenCalled();
    });
  });
});
