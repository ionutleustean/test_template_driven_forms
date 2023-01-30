import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, FormGroupDirective, NgForm, NgModelGroup} from "@angular/forms";
import {Task} from '../doamin/model';
import {FormArrayBase} from "../form-array-base";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    deps: [NgForm, [new Optional(), NgModelGroup]],
    useFactory: (ngForm: NgForm, ngModelGroup: NgModelGroup): ControlContainer =>
      ngModelGroup || ngForm
  }]
})
export class TasksComponent extends FormArrayBase<Task> implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() {
    super(Task)
  }

  ngOnInit(): void {
  }

}
