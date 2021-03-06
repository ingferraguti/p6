import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GuiModule } from '../../gui/gui.module';

import { ItemService } from '../../services/item.service';
import { BusinessModule } from '../../business/business.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    GuiModule,
    BusinessModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [ 
    
    ItemService
   
  ]
})
export class HomeModule { }
