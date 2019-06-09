import { Component, OnInit } from '@angular/core';
import { Heading } from 'src/app/core/models/heading';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Select(ContentState.getHeading) heading$: Observable<Heading>;
  heading: Heading;

  constructor() {
    this.heading$
    .subscribe(heading => this.heading = heading);
  }

  ngOnInit() {
  }

}
