import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAbsoluteComponent } from './components/footer-absolute/footer-absolute.component';
import { ExpoComponent } from './components/expo/expo.component';
import { HeadingComponent } from './components/heading/heading.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HeroComponent } from './components/hero/hero.component';
import { LogoComponent } from './elements/logo/logo.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ButtonComponent } from './elements/button/button.component';
import { CardComponent } from './elements/card/card.component';
import { ProgressBarComponent } from './elements/progress-bar/progress-bar.component';
import { ContactInfoComponent } from './elements/contact-info/contact-info.component';
import { ImageComponent } from './elements/image/image.component';
import { TextsComponent } from './elements/texts/texts.component';
import { ImagesRowComponent } from './elements/images-row/images-row.component';
import { ImageModalComponent } from './elements/image-modal/image-modal.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HeaderComponent, FooterComponent, FooterAbsoluteComponent,
  ExpoComponent, HeadingComponent, AboutUsComponent,
  SkillsComponent, ReviewsComponent, HeroComponent
];

const ELEMENTS = [
  LogoComponent, MenuComponent, ButtonComponent,
  CardComponent, ProgressBarComponent,
  ContactInfoComponent, ImageComponent, TextsComponent,
  ImagesRowComponent
];

@NgModule({
  declarations: [...COMPONENTS, ...ELEMENTS, ImageModalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
