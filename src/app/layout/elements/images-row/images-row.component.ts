import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-images-row',
  templateUrl: './images-row.component.html',
  styleUrls: ['./images-row.component.scss']
})
export class ImagesRowComponent implements OnInit {
  @Input() projects: Project;
  modalIndex: number;

  constructor() { }

  ngOnInit() {
  }

  turnOffModal() {
    this.modalIndex = null;
  }

}
