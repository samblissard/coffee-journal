import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JournalEntryService } from '../services/journal-entry.service';
import { JournalEntry } from '../models/journal-entry';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  coffeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    roaster: new FormControl('', Validators.required),
    roast: new FormControl('', Validators.required),
    tastingNote: new FormControl(''),
  });
  tastingNoteList: String[];

  recipeForm = new FormGroup({
    method: new FormControl(''),
    coffeeWeight: new FormControl(),
    waterWeight: new FormControl(),
    grindSetting: new FormControl(),
  });

  constructor(private journalEntryService: JournalEntryService) {
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

  async submitForm(): Promise<void> {
    const journalEntry: JournalEntry = {
      coffee: { ...this.coffeeForm.value, tastingNotes: this.tastingNoteList },
    };
    this.journalEntryService
      .create(journalEntry)
      .subscribe((entry) => alert('entry created!'));
  }
}
