import { Component,OnInit } from '@angular/core';
// Import Services
import { ItemService } from '../../services/item.service';
// Import Models
import { Item } from '../../domain/rapi-dev-kit_db/item';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit { //extends ItemListDelete

  constructor(
     
  ) { }

  /**
   * Init
   */
  ngOnInit(): void {
    
  }

}
