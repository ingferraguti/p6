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
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

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
    ExampleComponent,
    Example2Component,
    Example3Component
  ],
  providers: [ 
    
    ItemService
   
  ]
})
export class ExampleModule { }
