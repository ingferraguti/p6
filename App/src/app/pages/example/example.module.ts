import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GuiModule } from '../../gui/gui.module';

import { ItemService } from '../../services/item.service';
//import { ItemListDelete } from '../../business/item-list-delete';
import { BusinessModule } from '../../business/business.module';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    SharedModule,
    GuiModule,
    BusinessModule
  ],
  declarations: [
    ExampleComponent
  ],
  providers: [ 
    
    ItemService
   
  ]
})
export class ExampleModule { }
