import { Component, OnInit, Input } from '@angular/core';
import { TableAction, TableEvent } from '../../gui/Interfaces';
//import { TableActionsComponent } from 

@Component({
  selector: 'gui-table',
  template: `
  <div class="table-responsive">
  <table class="table" [ngClass] ="tableCssClass">
    <thead>
      <tr>
          <th *ngFor="let h of heading">{{h}}</th>
          <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let obj of data">
          <td *ngFor="let h of heading" >{{obj[h]}}</td>
          <td>
            <gui-table-actions 
              [actions]="actions"
              [row]="obj"
              (action)="action($event)">
            </gui-table-actions>
          </td>
      </tr>
    </tbody>
  </table>
</div>`
})
export class TableComponent {
  
  @Input() tableCssClass : string[];
  @Input() data : Object[];
  @Input() heading : string[];
  @Input() tableRowActions : Object[];
  @Input() actions : TableAction[];

  constructor() { }

  action(e: TableEvent){
    console.log(e);
  }
}
