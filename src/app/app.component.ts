import { Component } from '@angular/core';
import { LangService } from './core/services/lang.service';
import { Select } from '@ngxs/store';
import { ContentState } from './core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(ContentState.getLanguage) language$: Observable<string>;

  title = 'goweb';
  constructor(private langService: LangService) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.langService.getLanguage(language);
        }
      });
  }
}
