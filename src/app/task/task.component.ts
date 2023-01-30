import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, FormGroupDirective, NgForm, NgModelGroup} from "@angular/forms";
import {Task} from '../doamin/model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    deps: [NgForm, [new Optional(), NgModelGroup]],
    useFactory: (ngForm: NgForm, ngModelGroup: NgModelGroup): ControlContainer =>
      ngModelGroup || ngForm
  }]
})
export class TaskComponent implements OnInit {

  @Input() task: Task | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
