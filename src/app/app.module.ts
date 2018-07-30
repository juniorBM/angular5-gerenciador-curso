import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/service/user.service';
import { RootService } from './root.service';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedAddComponent } from './feed/feed-add/feed-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    FeedListComponent,
    FeedAddComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    UserService,
    RootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
