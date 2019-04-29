import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//GUI COMPONENT
import { TableComponent } from './component/table.component';
import { TableActionsComponent } from './component/table-actions.component';


@NgModule({
  declarations: [
    TableComponent,
    TableActionsComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[TableComponent]
})
export class GuiModule { }
