import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


// SHARED MODULE
import { SharedModule } from './shared/shared.module';

// CORE MODULE
import { CoreModule } from './core.module';

// LAYOUT
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';

//GUI


// DIRECTIVES
import { MailValidator } from './directives/mail.validate.directive';


@NgModule({
  declarations: [
     // LAYOUT
     AppComponent,
     NavbarComponent,
     MailValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
