import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalEntryFormComponent } from './journal-entry-form.component';
import { JournalEntryService } from '../../services/journal-entry.service';
import { of } from 'rxjs';
import { Coffee } from '../../models/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { JournalEntryListComponent } from '../journal-entry-list/journal-entry-list.component';
import { BrewingMethodService } from '../../services/brewing-method/brewing-method.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

describe('JournalEntryFormComponent', () => {
  let component: JournalEntryFormComponent;
  let fixture: ComponentFixture<JournalEntryFormComponent>;
  let mockJournalEntryService: jasmine.SpyObj<JournalEntryService>;
  let mockCoffeeService: jasmine.SpyObj<CoffeeService>;
  let mockBrewingMethodService: jasmine.SpyObj<BrewingMethodService>;
  let router: Router;

  beforeEach(async(() => {
    mockJournalEntryService = jasmine.createSpyObj('JournalEntryService', [
      'create',
    ]);
    const coffee: Coffee = {
      name: '',
      roaster: '',
      roast: '',
      id: 1,
      tastingNotes: [],
    };

    mockJournalEntryService.create.and.returnValue(
      of({
        coffee,
        brewingMethod: 'something',
        grindSetting: 1,
        coffeeWeight: 1,
        waterWeight: 1,
      })
    );

    mockCoffeeService = jasmine.createSpyObj('CoffeeService', ['getAll']);
    mockCoffeeService.getAll.and.returnValue(of([]));

    mockBrewingMethodService = jasmine.createSpyObj('BrewingMethodService', [
      'getAll',
    ]);
    mockBrewingMethodService.getAll.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [JournalEntryFormComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'entries', component: JournalEntryListComponent },
        ]),
        MatSnackBarModule,
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
        {
          provide: BrewingMethodService,
          useValue: mockBrewingMethodService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntryFormComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('coffee form', () => {
    beforeEach(() => {
      component.name.setValue('someValue');
      component.roaster.setValue('someValue');
      component.roast.setValue('someValue');
    });

    it('should be valid if required fields are entered', () => {
      expect(component.coffeeForm.invalid).toBeFalse();
    });

    it('should be invalid if name is not entered', () => {
      component.name.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });

    it('should be invalid if roaster is not entered', () => {
      component.roaster.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });

    it('should be invalid if roast is not entered', () => {
      component.roast.setValue('');
      expect(component.coffeeForm.invalid).toBeTrue();
    });
  });

  describe('recipe form', () => {
    beforeEach(() => {
      component.brewingMethod.setValue('someValue');
      component.coffeeWeight.setValue(1);
      component.waterWeight.setValue(1);
      component.grindSetting.setValue(1);
    });

    it('should be valid if required fields are entered', () => {
      expect(component.recipeForm.invalid).toBeFalse();
    });

    it('should be invalid if brewingMethod is not entered', () => {
      component.brewingMethod.setValue('');
      expect(component.recipeForm.invalid).toBeTrue();
    });

    it('should be invalid if coffeeWeight is not entered', () => {
      component.coffeeWeight.setValue(null);
      expect(component.recipeForm.invalid).toBeTrue();
    });

    it('should be invalid if waterWeight is not entered', () => {
      component.waterWeight.setValue(null);
      expect(component.recipeForm.invalid).toBeTrue();
    });

    it('should be invalid if grindSetting is not entered', () => {
      component.grindSetting.setValue(null);
      expect(component.recipeForm.invalid).toBeTrue();
    });
  });

  describe('addTastingNote', () => {
    it('should add tasting note from form control to tastingNoteList', () => {
      const tastingNoteValue = 'tastingNote';
      component.tastingNote.setValue(tastingNoteValue);
      component.addTastingNote();
      expect(component.tastingNoteList).toContain(tastingNoteValue);
    });

    it('should reset tasting note form control', () => {
      const tastingNoteValue = 'tastingNote';
      component.tastingNote.setValue(tastingNoteValue);
      component.addTastingNote();
      expect(component.tastingNote.value).toBeNull();
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

    it('should navigate to the journal entries page on success', () => {
      const navigateSpy = spyOn(router, 'navigateByUrl');
      component.submitForm();
      expect(navigateSpy).toHaveBeenCalledWith('entries');
    });
  });
});
