import { Component, OnInit } from '@angular/core';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Select(ContentState.getLogo) logo$: Observable<string>;
  logoSource: string;

  constructor() {
    this.logo$
      .subscribe(logoSource => {
          this.logoSource = logoSource
      }

      );
  }

  ngOnInit() {
  }

}
