import { Component, OnInit } from '@angular/core';
import { Expo } from 'src/app/core/models/expo';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.scss']
})
export class ExpoComponent implements OnInit {
  @Select(ContentState.getExpo) expo$: Observable<Expo>;
  expo: Expo;
  chunksOfProjects: any[];
  modalIndex: number;

  constructor() {
    this.expo$
      .subscribe(expo => {
        this.expo = expo;
        this.chunksOfProjects = this.chunk(this.expo.projects, 3);
      });
  }

  ngOnInit() {
  }

  chunk(array, size) {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArray;
  }

  turnOffModal() {
    this.modalIndex = null;
  }

  changeModal(index){
    if (index !== this.modalIndex){
      this.modalIndex = index; 
    } else {
      this.turnOffModal();
    }
  }

}
