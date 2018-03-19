import {Component, OnInit} from '@angular/core';
import {UtilService} from '../core/http/util.service';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  headersRelationship:any;
  headers:any;
  headersKeys:any;
  dataRelationship:any;
  data:any = [];

  constructor(private utilService:UtilService) {
  }

  ngOnInit() {
    const url = environment.context + environment.services.service2;

    this.utilService.post(url, {}, this.callback, this);
  }

  callback(response, success, context) {
    if (success) {
      context.headersRelationship = {
        id: 'Id',
        name: 'Name',
        user: 'User',
        email: 'Email'
      };

      context.headers = Object.values(context.headersRelationship);
      context.headersKeys = Object.keys(context.headersRelationship);

      context.dataRelationship = response.data;

      context.dataRelationship.forEach(item => {
        var itemFilterOut:Object = {};

        context.headersKeys.forEach(header => {
          itemFilterOut[header] = item[header];
        });

        context.data.push(Object.values(itemFilterOut));
      });
    } else {
      context.title = 'Error';
      context.message = response.message;

      context.modal.show();
    }
  }

  /* Backup context this
   callback(response, success, context) {
   if (success) {
   this.headersRelationship = {
   id: 'Id',
   name: 'Name',
   user: 'User',
   email: 'Email'
   };

   this.headers = Object.values(this.headersRelationship);
   this.headersKeys = Object.keys(this.headersRelationship);

   this.dataRelationship = response;

   this.dataRelationship.forEach(item => {
   var itemFilterOut:Object = {};

   this.headersKeys.forEach(header => {
   itemFilterOut[header] = item[header];
   });

   this.data.push(Object.values(itemFilterOut));
   });
   } else {
   context.title = 'Error';
   context.message = response.message;

   context.modal.show();
   }
   }
   */
}
