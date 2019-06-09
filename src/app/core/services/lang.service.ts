import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Content } from '../models/content';
import { SetContent } from '../actions/lang.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private http: HttpClient, private store: Store) { }

  getLanguage(language: string) {
    this.http
    .get(`assets/${language}.json`)
      .subscribe((content: Content) => {
        this.store.dispatch(new SetContent(content));
        console.log(content);
      }
      );
  }
}
