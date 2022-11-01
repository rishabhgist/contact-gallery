import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  contact: Contact = {}

  constructor() { }

  initial: string = '';

  ngOnInit(): void {
    
    if (this.contact?.firstName != undefined) {
      this.initial = this.contact.firstName;
    } 
  }
  

}
