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
  list: Item[];
  search: any = {};
  idSelected: string;
  constructor(
      private itemService: ItemService,
  ) { }

  /**
   * Init
   */
  ngOnInit(): void {
      this.itemService.list().subscribe(list => this.list = list);
  }

  /**
   * Select Item to remove
   *
   * @param {string} id Id of the Item to remove
   */
  selectId(id: string) {
      this.idSelected = id;
  }

  /**
   * Remove selected Item
   */
  deleteItem() {
      this.itemService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
  }
}
