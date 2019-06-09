import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { AboutUs } from 'src/app/core/models/about-us';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  @Select(ContentState.getAboutUs) aboutUs$: Observable<AboutUs>;
  aboutUs: AboutUs;

  constructor() {
    this.aboutUs$
    .subscribe( aboutUs => this.aboutUs = aboutUs);
  }

  ngOnInit() {
  }

}
