import {Component, Input, OnInit, Optional} from '@angular/core';
import {Person} from "../doamin/model";
import {ControlContainer, NgForm, NgModelGroup} from "@angular/forms";
import {FormArrayBase} from "../form-array-base";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    deps: [NgForm, [new Optional(), NgModelGroup]],
    useFactory: (ngForm: NgForm, ngModelGroup: NgModelGroup): ControlContainer =>
      ngModelGroup || ngForm
  }]

})

export class PersonComponent extends FormArrayBase<Person> implements OnInit {

  @Input() persons: Person[] = [];

  constructor() {
    super(Person)
  }

  ngOnInit(): void {
  }

}
