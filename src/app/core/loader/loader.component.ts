import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show() {
    document.getElementById("overlay").style.display = "block";
  }

  hide() {
    document.getElementById("overlay").style.display = "none";
  }
}
