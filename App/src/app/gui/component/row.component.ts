import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gui-row',
  template: `
  <div class="row">
    <ng-content></ng-content>
  </div>`
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

}
