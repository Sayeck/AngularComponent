import {Component, OnInit} from '@angular/core';
// Se deberán quitar
import {FormField} from '../core/dynamic-form/form-field';
import {Validators} from '@angular/forms';

import {UtilService} from '../core/http/util.service';
import {environment} from '../../environments/environment';

import {ModalComponent} from '../core/modal/modal.component';


@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  fields:Array<Array<FormField>>;
  form:any;
  // Modal
  modal: ModalComponent;
  title: string;
  message: string;

  constructor(private utilService:UtilService) {
    // Modal
    this.modal = new ModalComponent;
  }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.fields = [
      [{
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
        value: 'ing.campos.alejandro@gmail.com',
        required: true,
        hidden: false,
        inline: false,
        anotherValidations: [Validators.email],
        events: []
      }], [{
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
      }], [{
        type: '',
        name: 'hidden',
        id: 'hidden',
        placeholder: 'Hidden field',
        options: [],
        value: 'hidden',
        required: true,
        hidden: true,
        inline: false,
        anotherValidations: [],
        events: []
      }], [{
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
      }]
    ];
  }

  onFormCreated(form) {
    this.form = form;
    const field = this.getField('hidden');

    this.form.get('select').valueChanges.subscribe(value => {
      if (value === '2') {
        field.hidden = false;
        this.form.get('hidden').enable();
      } else {
        field.hidden = true;
        this.form.get('hidden').disable();
      }
    });
  }

  onSubmit(form) {
    if (form.valid) {
      const url = environment.context + environment.services.service1;

      this.utilService.post(url, form.value, this.callback, this);
    }
  }

  callback(response, success, context) {
    if(success) {
      console.log('response', response);
    } else {
      context.title = 'Error';
      context.message = response.message;

      context.modal.show();
    }
  }

  getField(id:string) {
    let field = null;

    this.fields.forEach(items => {
      items.forEach(item => {
        if (item.id === id) {
          field = item;
        }
      });
    });

    return field;
  }
}
