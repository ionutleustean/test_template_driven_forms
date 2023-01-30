import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-invisible-form-control',
  templateUrl: './invisible-form-control.component.html',
  styleUrls: ['./invisible-form-control.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, multi: true, useExisting: InvisibleFormControlComponent}]
})
export class InvisibleFormControlComponent implements ControlValueAccessor {

  private value: any = null;


  constructor() { }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj
  }

}
