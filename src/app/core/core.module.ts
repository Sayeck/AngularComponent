import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {DynamicFormService} from './dynamic-form.service';
import {LoaderComponent} from './loader/loader.component';
import {HttpClientModule} from '@angular/common/http';
import {UtilService} from './http/util.service';
import {ModalComponent} from './modal/modal.component';

//import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    HttpClientModule,
    //FormsModule
  ],
  declarations: [
    LoaderComponent,
    ModalComponent
  ],
  exports: [
    DynamicFormModule,
    LoaderComponent,
    ModalComponent //
  ],
  providers: [
    DynamicFormService,
    UtilService
  ]
})
export class CoreModule {
}
