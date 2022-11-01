import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  contact: Contact = {}

  @Output()
  card = new EventEmitter<Contact>();
  constructor() { }

  initial: string = '';

  ngOnInit(): void {
    
    if (this.contact?.firstName != undefined) {
      this.initial = this.contact.firstName;
    } 
  }
  
  onContactHovered(contact: Contact) {
    this.card.emit(contact);
  }

}
