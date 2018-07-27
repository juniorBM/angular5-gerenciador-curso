import { Component } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private api_token: String = '';
  constructor(
    private rootService: RootService
  ) {
    this.api_token = localStorage.userapiToken;
    if (this.api_token) {
      console.log(this.api_token);

      this.rootService.checkToken(this.api_token)
        .then((data) => {
          // localStorage.setItem("userName", data.result.name);
          // localStorage.setItem("userLastname", data.result.lastname);
          // localStorage.setItem("userApiToken", data.result.api_token);
          // localStorage.setItem("userEmail", data.result.email);
          console.log(data);

        }).catch((err) => {
          console.log(err.error);
        })

    }
  }

}

