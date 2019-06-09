import { Component, OnInit, Input } from '@angular/core';
import { Text } from 'src/app/core/models/text';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  @Input() text: Text;

  constructor() {
  }

  ngOnInit() {
  }

}
