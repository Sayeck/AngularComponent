import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {DynamicFormComponent} from './dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {
}
