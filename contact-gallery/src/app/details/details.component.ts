import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  contact: Contact = {};
    
  constructor() { }

  ngOnInit(): void {
  }

}
