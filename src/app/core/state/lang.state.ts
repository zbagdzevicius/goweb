import { Content } from '../models/content';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetContent } from '../actions/lang.actions';

@State<Content>({
  name: 'auth',
  defaults: {
    language: 'lt',
    menu: null,
    contactInfo: null,
    logo: null,
    contactButton: null,
    heading: null,
    aboutUs: null,
    skills: null,
    expo: null,
    review: null,
    contact: null
  }
})

export class ContentState {
  @Selector()
  static getLanguage(content: Content) {
    return content.language;
  }
  @Selector()
  static getMenu(content: Content) {
    return content.menu;
  }
  @Selector()
  static getContactInfo(content: Content) {
    return content.contactInfo;
  }
  @Selector()
  static getLogo(content: Content) {
    return content.logo;
  }
  @Selector()
  static getContactButton(content: Content) {
    return content.contactButton;
  }
  @Selector()
  static getHeading(content: Content) {
    return content.heading;
  }
  @Selector()
  static getAboutUs(content: Content) {
    return content.aboutUs;
  }
  @Selector()
  static getSkills(content: Content) {
    return content.skills;
  }
  @Selector()
  static getExpo(content: Content) {
    return content.expo;
  }
  @Selector()
  static getReview(content: Content) {
    return content.review;
  }
  @Selector()
  static getContact(content: Content) {
    return content.contact;
  }


  @Action(SetContent)
  setActiveCard(context: StateContext<Content>, { payload }: SetContent) {
    context.patchState(payload);
  }
}
