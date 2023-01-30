import {Component, Input, OnInit, Optional} from '@angular/core';
import {Project} from "../doamin/model";
import {ControlContainer, NgForm, NgModelGroup} from "@angular/forms";
import {FormArrayBase} from "../form-array-base";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    deps: [NgForm, [new Optional(), NgModelGroup]],
    useFactory: (ngForm: NgForm, ngModelGroup: NgModelGroup): ControlContainer =>
      ngModelGroup || ngForm
  }]
})
export class ProjectsComponent extends FormArrayBase<Project> implements OnInit {

  @Input() projects: Project[] = [];

  constructor() {
    super(Project)
  }

  ngOnInit(): void {
  }

}
