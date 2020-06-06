import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  tastingNote: FormControl = new FormControl('');
  tastingNoteList: String[];

  constructor() {
    this.tastingNoteList = [];
  }

  ngOnInit(): void {}

  addTastingNote(): void {
    this.tastingNoteList.push(this.tastingNote.value);
    this.tastingNote.reset();
  }

  removeTastingNote(indexToRemove: number): void {
    this.tastingNoteList.splice(indexToRemove, 1);
  }
}
