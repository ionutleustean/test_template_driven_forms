import {Directive, Input} from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appCrossValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CrossValidatorDirective, multi: true}]

})
export class CrossValidatorDirective implements Validator {

  @Input() appCrossValidator: boolean = true;

  constructor() {
  }


  validate(control: FormGroup): ValidationErrors | null {
    if(this.appCrossValidator) {

      const value: any = control.value
      let error = null;

      Object.keys(value).forEach(i => {
        const index = Number(i)
        if (index > 0) {
          if (value[i].age <= value[(index - 1).toString()]?.age) {
            control.controls[i].setErrors({'errorAge': 'Eroare'})
            error = {'errorAge': 'Eroare'};
          }
        }
      })

      return error;
    }
    return  null;
  }
}

