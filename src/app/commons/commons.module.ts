import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import {LeftComponent} from './left/left.component'; // Optional
// Component
import {NotFoundComponent} from './not-found/not-found.component';
import {AnotherComponent} from './../another/another.component';
import {TableComponent} from '../table/table.component';
import {AccordionComponent} from '../accordion/accordion.component';
// Router
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
  {path: '', component: AnotherComponent},
  {path: 'form', component: AnotherComponent},
  {path: 'table', component: TableComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //, {enableTracing: true} // <-- debugging purposes only
    )
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NotFoundComponent,
    LeftComponent
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NotFoundComponent,
    LeftComponent
  ],
  providers: []
})
export class CommonsModule {
}
