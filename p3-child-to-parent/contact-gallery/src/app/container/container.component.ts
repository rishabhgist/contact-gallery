import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CONTACTS } from '../model/contacts';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Output()
  key = new EventEmitter<Contact>();

  contacts = CONTACTS;
  value: Contact = {};
  constructor() { }

  ngOnInit(): void {
  }

  onContactHovered(value:any) {
    this.value = value;
  }
}
