import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  // Input/Output for notes Array
  notesValue: Note[];
  @Input() 
  get notes(): Note[] {
    return this.notesValue;
  }
  @Output() notesChange = new EventEmitter();
  set notes(val) {
    this.notesValue = val;
    this.notesChange.emit(this.notesValue);
  }

  // Input/Output for selectedNote
  selectedNoteValue: Note;
  @Input() 
  get selectedNote(): Note {
    return this.selectedNoteValue;
  }
  @Output() selectedNoteChange = new EventEmitter();
  set selectedNote(val:Note) {
    this.selectedNoteValue = val;
    console.log(this.selectedNoteValue)
    this.selectedNoteChange.emit(this.selectedNoteValue);
  }

  constructor() { }

  ngOnInit() {
    
  }  

  addNote() {
    if(this.notes == null) this.notes = [];
    this.notes.push({content:"", key: (Math.random() * 10000) % (this.notes.length+1)});
    this.selectedNote = this.notes[this.notes.length - 1];
  }

  setSelectedNote(note:Note) {
    this.selectedNote = note;
  }

  deleteNote(note:Note) {
    this.notes = this.notes.filter(n => n.key != note.key);
    if(this.notes.length == 0) 
      this.selectedNote = null;
    if(note == this.selectedNote)
      this.selectedNote = null;
  }

}
