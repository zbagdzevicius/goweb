import { Content } from '../models/content';

export class SetContent {
  static readonly type = '[lang] set content';
  constructor(public payload: Content) { }
}
