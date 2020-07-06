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
});
