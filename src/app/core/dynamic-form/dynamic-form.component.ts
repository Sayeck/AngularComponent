import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicFormService} from '../dynamic-form.service';
import {FormField} from './form-field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() fields: Array<FormField>;
  @Output() output = new EventEmitter();
  @Output() formCreated = new EventEmitter();

  constructor(private fb: FormBuilder, private service: DynamicFormService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    //this.fields = this.service.getFields();

    const formControls = {};

    this.fields.forEach(field => {
      let validators = [];

      if (field.anotherValidations.length > 0) {
        validators = field.anotherValidations;
      }

      if (field.required) {
        validators.push(Validators.required);
      }

      formControls[field.id] = [field.value, validators];
    });

    this.formGroup = this.fb.group(formControls);

    this.returnForm();
  }

  returnForm() {
    this.formCreated.emit(this.formGroup);
  }

  isValid(field: FormField) {
    const formField = this.formGroup.get(field.id);

    return formField;
  }

  isValidError(field: FormField) {
    const error = this.formGroup.get(field.id).errors;
    let errorMessage = '';

    if (error.minlength) {
      errorMessage = 'Mínimo ' + error.minlength.requiredLength + ' caracteres.';
    } else if (error.maxlength) {
      errorMessage = 'Máximo ' + error.maxlength.requiredLength + ' caracteres.';
    } else if (error.pattern) {
      errorMessage = 'Formato incorrecto.';
    } else {
      errorMessage = 'Campo requerido';
    }

    return errorMessage;
  }

  onSubmit() {
    this.output.emit(this.formGroup);
  }

  getField(id: string) {
    console.log('id...', id);
    var field = null;

    this.fields.forEach(field => {
      console.log(field.id, id);
      if(field.id == id) {
        return field;
      }
    });

    return field;
  }
}
