import { Component, OnInit } from '@angular/core';
import { Example2Component } from '../example2/example2.component';

@Component({
  selector: 'app-example3',
  template: `<gui-table 
    [tableCssClass]="[]" 
    [heading]="tableheading" 
    [data]="list"
    [actions]="tableactions"
    >
    </gui-table>`,
  styleUrls: ['./example3.component.css']
})
export class Example3Component extends Example2Component implements OnInit {

  tableheading=["Active",	"Created",	"Data",	"Modified",	"Order",	"Protected",	"Status"];
  tableactions=[
    {
      icon: "search",
      color: "primary"
    },{
      icon: "trash",
      color: "danger",
      action:"delete"
    },{
     
      icon: "pencil",
      color: "warning"
     
    }];
}
