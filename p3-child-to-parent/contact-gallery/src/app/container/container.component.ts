import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../model/contacts';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  contacts = CONTACTS;
  constructor() { }

  ngOnInit(): void {
  }

}
