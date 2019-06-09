import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Select(ContentState.getContactButton) contactButton$: Observable<string>;
  isContactButton: boolean;

  constructor() {
    if (!this.text) {
      this.contactButton$
        .subscribe(concactButton => {
          this.text = concactButton;
          this.isContactButton = true;
        });
    }
  }

  ngOnInit() {
  }

}
