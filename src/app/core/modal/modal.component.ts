import {Component, OnInit, Input} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @Input() title:string;
  @Input() message:string;

  constructor() {
  }

  ngOnInit() {
  }

  show() {
    $('#myModal').modal('show');
  }
}
