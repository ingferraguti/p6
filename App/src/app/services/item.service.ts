// BASE SERVICE
import { ItemBaseService } from './base/item.base.service';

// MODEL
import { Item } from '../domain/rapi-dev-kit_db/item';

/**
 * YOU CAN OVERRIDE HERE ItemBaseService
 */
export class ItemService extends ItemBaseService {


    items: Item[];
    search: any = {};
    idSelected: string;
  
    getAll(){
        this.list().subscribe(list => this.items = list);
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
        this.remove(this.idSelected).subscribe(data => this.items = this.items.filter(el => el._id !== this.idSelected));
    }



}
