// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

//Import GUI component ????


// Import Services



/**
 * Home Component
 */
@Component({
    selector: 'app-home',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
        private location: Location
        ) {

    }




    //EXAMPLE
    headingexample=["col1","col2","col3","col4"];

    exampletabledata=[
      {
        "col1":"qwweww",
        "col2":"qwwdgww",
        "col3":"qw355w",
        "col4":"qwweww"
      },{
        "col1":"q34eww",
        "col2":"qwwdgww",
        "col3":"qw333w",
        "col5":"qww456w",
        "col4":"qww456w"
      },{
        "col1":"1wweww",
        "col5":"q123dgww",
        "col3":"qw333w",
        "col4":"qww13w"}];
  
    exampleactions=[
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
