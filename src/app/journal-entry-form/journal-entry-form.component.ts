import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalEntryService } from '../services/journal-entry.service';
import { JournalEntry } from '../models/journal-entry';
import { CoffeeService } from '../services/coffee.service';
import { BrewingMethodService } from '../services/brewing-method/brewing-method.service';
import { Coffee } from '../models/coffee';
import { Router } from '@angular/router';
import { BrewingMethod } from '../models/brewing-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  coffeeList: Coffee[];
  brewingMethods: BrewingMethod[];

  coffeeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    roaster: new FormControl('', Validators.required),
    roast: new FormControl('', Validators.required),
    tastingNote: new FormControl(''),
  });
  tastingNoteList: String[];

  recipeForm = new FormGroup({
    brewingMethod: new FormControl('', Validators.required),
    coffeeWeight: new FormControl(null, Validators.required),
    waterWeight: new FormControl(null, Validators.required),
    grindSetting: new FormControl(null, Validators.required),
  });

  constructor(
    private journalEntryService: JournalEntryService,
    private coffeeService: CoffeeService,
    private brewingMethodService: BrewingMethodService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.tastingNoteList = [];
  }

  ngOnInit(): void {
    this.coffeeService
      .getAll()
      .subscribe((coffeeList) => (this.coffeeList = coffeeList));
    this.brewingMethodService
      .getAll()
      .subscribe((brewingMethods) => (this.brewingMethods = brewingMethods));
  }

  onCoffeeListSelect(): void {
    [this.name, this.roaster, this.roast, this.tastingNote].forEach(
      (control) => {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      }
    );
  }

  addTastingNote(): void {
    this.tastingNoteList.push(this.tastingNote.value);
    this.tastingNote.reset();
  }

  removeTastingNote(indexToRemove: number): boolean {
    if (indexToRemove < 0 || indexToRemove > this.tastingNoteList.length) {
      return false;
    }
    this.tastingNoteList.splice(indexToRemove, 1);
    return true;
  }

  calculateRatio(): string {
    const coffeeWeight = this.coffeeWeight.value;
    const waterWeight = this.waterWeight.value;
    if (coffeeWeight <= 0 || waterWeight <= 0) {
      return '';
    }

    return (waterWeight / coffeeWeight).toString();
  }

  async submitForm(): Promise<void> {
    const journalEntry: JournalEntry = {
      coffee: { ...this.coffeeForm.value, tastingNotes: this.tastingNoteList },
      ...this.recipeForm.value,
    };
    this.journalEntryService.create(journalEntry).subscribe(
      (entry) => this.router.navigateByUrl('entries'),
      (errorResponse: HttpErrorResponse) =>
        this._snackBar.open(`Error! ${errorResponse.error.message}`, 'Close')
    );
  }

  // Form control accessors
  get name() {
    return this.coffeeForm.get('name');
  }
  get roaster() {
    return this.coffeeForm.get('roaster');
  }
  get roast() {
    return this.coffeeForm.get('roast');
  }
  get tastingNote() {
    return this.coffeeForm.get('tastingNote');
  }

  get brewingMethod() {
    return this.recipeForm.get('brewingMethod');
  }
  get coffeeWeight() {
    return this.recipeForm.get('coffeeWeight');
  }
  get waterWeight() {
    return this.recipeForm.get('waterWeight');
  }
  get grindSetting() {
    return this.recipeForm.get('grindSetting');
  }
}
