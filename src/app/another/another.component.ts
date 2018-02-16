import {Component, OnInit} from '@angular/core';
// Se deberán quitar
import {FormField} from '../core/dynamic-form/form-field';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  fields = [FormField];
  form: any;

  constructor() {
  }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.fields = [{
      type: '',
      name: 'name',
      id: 'name',
      placeholder: 'Enter name',
      options: [],
      value: 'Name',
      required: true,
      hidden: false,
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
      hidden: false,
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
      hidden: false,
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
      hidden: false,
      inline: false,
      anotherValidations: [],
      events: []
    }, {
      type: '',
      name: 'hidden',
      id: 'hidden',
      placeholder: 'Hidden field',
      options: [],
      value: 'hidden',
      required: true,
      hidden: false,
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
      hidden: false,
      inline: false,
      anotherValidations: [],
      //events: [{change: this.onChange()}]
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
      hidden: false,
      inline: true,
      anotherValidations: [],
      events: []
    }];
  }

  onFormCreated(form) {
    this.form = form;

    this.form.get('select').valueChanges.subscribe(value => {
      console.log(value);

      if (value === '2') {
        console.log('hidden');
        //this.form.get('hidden').hidden = true;
        this.form.get('textarea').hidden = true;
      } else {
        console.log('no hidden');
        this.form.get('textarea').hidden = false;
      }
    });
  }

  onSubmit(form) {
    console.log(form.value, this.form.value);
  }

  /*onChange() {
    console.log('change');
  }*/
}
