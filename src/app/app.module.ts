import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AnotherComponent} from './another/another.component';
import {CommonsModule} from './commons/commons.module';
import {TableComponent} from './table/table.component';
import {AccordionComponent} from './accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    TableComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
