import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/core/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Select(ContentState.getSkills) skills$: Observable<Skills>;
  skills: Skills;

  constructor() {
    this.skills$
    .subscribe(skills => this.skills = skills);
  }

  ngOnInit() {
  }

}
