import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalEntryService } from '../services/journal-entry.service';
import { JournalEntry } from '../models/journal-entry';
import { CoffeeService } from '../services/coffee.service';
import { BrewingMethodService } from '../services/brewing-method/brewing-method.service';
import { Coffee } from '../models/coffee';
import { Router } from '@angular/router';
import { BrewingMethod } from '../models/brewing-method';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  coffeeType: string;
  coffeeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    roaster: new FormControl('', Validators.required),
    roast: new FormControl('', Validators.required),
    tastingNote: new FormControl(''),
  });
  tastingNoteList: String[];
  coffeeList: Coffee[];

  recipeForm = new FormGroup({
    method: new FormControl(''),
    coffeeWeight: new FormControl(),
    waterWeight: new FormControl(),
    grindSetting: new FormControl(),
  });
  brewingMethods: BrewingMethod[];

  constructor(
    private journalEntryService: JournalEntryService,
    private coffeeService: CoffeeService,
    private brewingMethodService: BrewingMethodService,
    private router: Router
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
    const nameControl = this.coffeeForm.controls['name'];
    const roasterControl = this.coffeeForm.controls['roaster'];
    const roastControl = this.coffeeForm.controls['roast'];

    const requiredControls = [nameControl, roasterControl, roastControl];
    requiredControls.forEach((control) => {
      control.clearValidators();
      control.updateValueAndValidity();
      control.disable();
    });

    this.coffeeForm.controls['tastingNote'].disable();
  }

  addTastingNote(): void {
    this.tastingNoteList.push(this.coffeeForm.controls['tastingNote'].value);
    this.coffeeForm.controls['tastingNote'].reset();
  }

  removeTastingNote(indexToRemove: number): boolean {
    if (indexToRemove < 0 || indexToRemove > this.tastingNoteList.length) {
      return false;
    }
    this.tastingNoteList.splice(indexToRemove, 1);
    return true;
  }

  calculateRatio(): string {
    const coffeeWeight = this.recipeForm.controls['coffeeWeight'].value;
    const waterWeight = this.recipeForm.controls['waterWeight'].value;
    if (coffeeWeight <= 0 || waterWeight <= 0) {
      return '';
    }

    return (waterWeight / coffeeWeight).toString();
  }

  async submitForm(): Promise<void> {
    const journalEntry: JournalEntry = {
      coffee: { ...this.coffeeForm.value, tastingNotes: this.tastingNoteList },
    };
    this.journalEntryService
      .create(journalEntry)
      .subscribe((entry) => this.router.navigateByUrl('entries'));
  }
}
