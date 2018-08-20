import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { PageService } from '../page.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @Input() note: Note;

  constructor(private pageService: PageService, private localSt:LocalStorageService) { }

  ngOnInit() {
    
  }
}
