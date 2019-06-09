import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Select(ContentState.getContact) contact$: Observable<Contact>;
  contact: Contact;

  constructor() {
    this.contact$
      .subscribe(contact => this.contact = contact);
  }

  ngOnInit() {
  }

}
