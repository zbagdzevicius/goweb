import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from './services/lang.service';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LangService,
    ContactService
  ]
})
export class CoreModule { }
