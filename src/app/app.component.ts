import { Component } from '@angular/core';
import { RootService } from './root.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private user: any;
  constructor(
    private rootService: RootService,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/plus.svg'));

    this.user = localStorage.user;
    if (this.user) {
      this.user = JSON.parse(this.user);

      if (this.user && this.user.api_token) {
        this.checkToken(this.user.api_token);
      } else {
        this.router.navigate(['/'])
      }
    } else {
      this.router.navigate(['/'])
    }
  }

  checkToken(api_token: String) {
    this.rootService.checkToken(api_token)
      .then((data: any) => {
        let user = JSON.stringify(data.result);
        localStorage.setItem('user', user);
        this.router.navigate(['/feed-list']);
      }).catch((err) => {
        console.log(err.error);
      })
  }
}

