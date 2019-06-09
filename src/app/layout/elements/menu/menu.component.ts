import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Select(ContentState.getMenu) menu$: Observable<string[]>;
  menu: string[];

  constructor() {
    this.menu$
      .subscribe(menu =>
        this.menu = menu);
  }

  ngOnInit() {
  }

}
