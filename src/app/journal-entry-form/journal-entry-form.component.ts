import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  coffeeForm = new FormGroup({
    name: new FormControl(''),
    roaster: new FormControl(''),
    roast: new FormControl(''),
    tastingNote: new FormControl(''),
  });
  tastingNoteList: String[];

  recipeForm = new FormGroup({
    method: new FormControl(''),
    coffeeWeight: new FormControl(),
    waterWeight: new FormControl(),
    grindSetting: new FormControl(),
  });

  constructor() {
    this.tastingNoteList = [];
  }

  ngOnInit(): void {}

  addTastingNote(): void {
    this.tastingNoteList.push(this.coffeeForm.controls['tastingNote'].value);
    this.coffeeForm.controls['tastingNote'].reset();
  }

  removeTastingNote(indexToRemove: number): void {
    this.tastingNoteList.splice(indexToRemove, 1);
  }

  calculateRatio(): string {
    const coffeeWeight = this.recipeForm.controls['coffeeWeight'].value;
    const waterWeight = this.recipeForm.controls['waterWeight'].value;
    if (coffeeWeight <= 0 || waterWeight <= 0) {
      return '';
    }

    return (waterWeight / coffeeWeight).toString();
  }
}
