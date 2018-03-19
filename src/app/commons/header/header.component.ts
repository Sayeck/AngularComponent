import {Component, OnInit} from '@angular/core';
import {Menu} from './menu';
import {UtilService} from '../../core/http/util.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus:Array<Menu>;

  constructor(private utilService:UtilService) {
  }

  ngOnInit() {
    const url = environment.context + environment.services.menu;

    this.utilService.get(url, this.callback, this);
  }

  callback(response, success, context) {
    if (success) {
      context.menus = response;
    } else {
      context.title = 'Error';
      context.message = response.message;

      context.modal.show();
    }
  }

}
