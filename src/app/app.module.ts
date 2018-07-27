import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/service/user.service';
import { ListComponent } from './feed/list/list.component';
import { RootService } from './root.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    UserService,
    RootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
