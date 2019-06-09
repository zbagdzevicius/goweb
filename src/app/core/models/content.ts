import { Contact } from './contact';
import { Skills } from './skills';
import { Expo } from './expo';
import { Heading } from './heading';
import { ContactInfo } from './contact-info';
import { AboutUs } from './about-us';
import { Review } from './review';

export interface Content {
  language: 'lt'|'en';
  menu: string[];
  contactInfo: ContactInfo;
  logo: string;
  contactButton: string;
  heading: Heading;
  aboutUs: AboutUs;
  skills: Skills;
  expo: Expo;
  review: Review;
  contact: Contact;
}
