import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @Input() imageSource: string;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  turnOffImage() {
    this.valueChange.emit(false);
  }

}
