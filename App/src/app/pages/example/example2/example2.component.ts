import { Component, OnInit } from '@angular/core';
import { Item } from '../../../domain/rapi-dev-kit_db/item';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  //list: Item[];
  search: any = {};
  //idSelected: string;
  constructor(
      private itemService: ItemService,
  ) { }

  /**
   * Init
   */
  ngOnInit(): void {
      this.itemService.getAll()
  }

}
