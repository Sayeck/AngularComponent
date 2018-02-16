import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {DynamicFormService} from './dynamic-form.service';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  declarations: [],
  exports: [DynamicFormModule],
  providers: [DynamicFormService]
})
export class CoreModule {
}
