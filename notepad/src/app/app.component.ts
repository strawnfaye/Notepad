import { Component } from '@angular/core';
import { Note } from './note';
import { interval } from 'rxjs';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  notes: Note[];
  selectedNote: Note;

  constructor(private pageService: PageService) { }
  
  ngOnInit() {
    this.getNotes();
    interval(3000).subscribe(x => {
      this.store();
    });
  }

  getNotes(): void {
    this.pageService.notes().subscribe(notes => this.notes = notes);
    this.notes = this.pageService.retrieveNotes();
    if(this.notes == null || this.notes.length == 0) this.addNote();
    this.selectedNote = this.notes[0];
  }

  store(): void {
    if(this.notes != null) this.pageService.storeNotes(this.notes);
  }

  addNote() {
    if(this.notes == null) this.notes = [];
    this.notes.push({content:"", key: (Math.random() * 10000) % (this.notes.length+1) });
  }
}
