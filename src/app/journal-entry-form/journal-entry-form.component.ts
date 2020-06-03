import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.css'],
})
export class JournalEntryFormComponent implements OnInit {
  tastingNoteList: String[];

  constructor() {
    this.tastingNoteList = [];
  }

  ngOnInit(): void {}

  addTastingNote(tastingNote: String): void {
    this.tastingNoteList.push(tastingNote);
  }
}
