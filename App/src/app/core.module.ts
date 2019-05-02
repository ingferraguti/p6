import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* START MY SERVICES IMPORTS*/
import { BlockService } from './services/block.service';
import { BlockTypeService } from './services/block-type.service';
import { ItemService } from './services/item.service';
import { ItemTypeService } from './services/item-type.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
/* END MY SERVICES IMPORTS*/

import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { SecurityService } from './security/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './security/auth.interceptor';

import { GuiModule } from './gui/gui.module';





@NgModule({
  declarations: [],
  providers: [
    /* START SERVICE PROVIDERS */
    BlockService,
    BlockTypeService,
    ItemService,
    ItemTypeService,
    RoleService,
    UserService,
    /* END SERVICE PROVIDERS */

   

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  imports: [
    CommonModule,
    GuiModule
  ],
  exports: []
})
export class CoreModule { }
