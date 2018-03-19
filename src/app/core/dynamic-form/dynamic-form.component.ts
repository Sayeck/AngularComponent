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
  formGroup:FormGroup;
  @Input() fields:Array<Array<FormField>>;
  @Input() grid:any;
  @Output() output = new EventEmitter();
  @Output() formCreated = new EventEmitter();

  constructor(private fb:FormBuilder, private service:DynamicFormService) {
  }

  ngOnInit() {
    this.grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    this.createForm();
  }

  createForm() {
    //this.fields = this.service.getFields();

    const formControls = {};

    this.fields.forEach(fields => {
      fields.forEach(field => {
        let validators = [];

        if (field.anotherValidations.length > 0) {
          validators = field.anotherValidations;
        }

        if (field.required) {
          validators.push(Validators.required);
        }

        formControls[field.id] = [field.value, validators];
      });
    });

    this.formGroup = this.fb.group(formControls);

    this.returnForm();

    //const fieldFound = this.getField(this.findField);
  }

  returnForm() {
    this.formCreated.emit(this.formGroup);
  }

  isValid(field:FormField) {
    return !this.formGroup.get(field.id).valid;
  }

  isDisabled(field:FormField) {
    return !this.formGroup.get(field.id).disabled;
  }

  isValidError(field:FormField) {
    const error = this.formGroup.get(field.id).errors;
    let errorMessage = '';

    if (error.minlength) {
      errorMessage = 'Mínimo ' + error.minlength.requiredLength + ' caracteres.';
    } else if (error.maxlength) {
      errorMessage = 'Máximo ' + error.maxlength.requiredLength + ' caracteres.';
    } else if (error.pattern) {
      errorMessage = 'Formato incorrecto.';
    } else if (error.email) {
      errorMessage = 'Formato incorrecto.';
    } else {
      errorMessage = 'Campo requerido';
    }

    return errorMessage;
  }

  onSubmit() {
    this.output.emit(this.formGroup);
  }

  /*getField(id: string) {
   this.fields.forEach(field => {
   //console.log(field.id, id);
   if (field.id === id) {
   return field;
   }
   });

   return null;
   }*/
}
