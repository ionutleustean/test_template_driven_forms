import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, FormGroupDirective, NgForm, NgModelGroup} from "@angular/forms";
import {Activity} from "../doamin/model";
import {FormArrayBase} from "../form-array-base";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    deps: [NgForm, [new Optional(), NgModelGroup]],
    useFactory: (ngForm: NgForm, ngModelGroup: NgModelGroup): ControlContainer =>
      ngModelGroup || ngForm
  }]
})
export class ActivityComponent extends FormArrayBase<Activity> implements OnInit {

  @Input() activities: Activity[] = [];

  constructor() {
    super(Activity);
  }

  ngOnInit(): void {
  }

}
