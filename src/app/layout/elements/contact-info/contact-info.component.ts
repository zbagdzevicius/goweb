import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { ContactInfo } from 'src/app/core/models/contact-info';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Select(ContentState.getContactInfo) contactInfo$: Observable<ContactInfo>;
  contactInfo: ContactInfo;
  @Input() iconsOnly: boolean;

  constructor() {
    this.contactInfo$
    .subscribe(contactInfo => this.contactInfo = contactInfo);
  }

  ngOnInit() {
  }

}
