import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private storage:LocalStorageService) { }

  notes(): Observable<Note[]> {
    return this.storage.observe('notePages');
  }

  retrieveNotes(): Note[] {
    return this.storage.retrieve('notePages');
  }

  storeNotes(notes: Note[]) {
    this.storage.store('notePages', notes);
  }
}
