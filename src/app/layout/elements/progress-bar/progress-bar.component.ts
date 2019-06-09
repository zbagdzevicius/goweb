import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/app/core/models/tool';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() tools: Tool[];

  constructor() { }

  ngOnInit() {
  }

}
