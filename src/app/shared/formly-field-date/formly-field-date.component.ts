import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-date',
  template: `
    <div class="form-group">
      <label for="{{id}}">{{to.label}}</label>
      <input type="date" class="form-control" [formControl]="dateForm" [formlyAttributes]="field">
    </div>
  `,
})
export class FormlyFieldDate extends FieldType implements OnInit {
  dateForm!: FormControl;

  ngOnInit() {
    this.dateForm = new FormControl(this.to['defaultValue']);
    this.dateForm.valueChanges.subscribe(value => {
      this.formControl.setValue(value);
    });
  }
}