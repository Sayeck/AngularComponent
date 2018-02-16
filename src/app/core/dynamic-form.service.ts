import { Injectable } from '@angular/core';
import {FormField} from './dynamic-form/form-field';
import {Validators} from '@angular/forms';

@Injectable()
export class DynamicFormService {
  fields: [FormField];

  constructor() { }

  getFields() {
    /*this.fields = [{
      type: '',
      name: 'name',
      id: 'name',
      placeholder: 'Enter name',
      options: [],
      value: 'Name',
      required: true,
      inline: false,
      anotherValidations: [],
      events: []
    }, {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'Enter email',
      options: [],
      value: 'Email',
      required: true,
      inline: false,
      anotherValidations: [],
      events: []
    }, {
      type: 'textarea',
      name: 'textarea',
      id: 'textarea',
      placeholder: 'Enter text',
      options: [],
      value: 'text',
      required: true,
      inline: false,
      anotherValidations: [Validators.maxLength(8)],
      events: []
    }, {
      type: 'select',
      name: 'select',
      id: 'select',
      placeholder: 'Select an option',
      options: [
        {value: 1, label: 'One'},
        {value: 2, label: 'Two'},
        {value: 3, label: 'Three'}
        ],
      value: 3,
      required: true,
      inline: false,
      anotherValidations: [],
      events: []
    }, {
      type: 'checkbox',
      name: 'checkbox',
      id: 'checkbox',
      placeholder: 'Select checkbox',
      options: [],
      value: true,
      required: true,
      inline: false,
      anotherValidations: [],
      events: []
    }, {
      type: 'radio',
      name: 'radio',
      id: 'radio',
      placeholder: 'Select radio 1',
      options: [
        {id: 'radio1', value: 1, label: 'Radio 1'},
        {id: 'radio2', value: 2, label: 'Radio 2'},
        {id: 'radio3', value: 3, label: 'Radio 3'}
      ],
      value: 2,
      required: false,
      inline: true,
      anotherValidations: [],
      events: []
    }];*/

    return this.fields;
  }
}
