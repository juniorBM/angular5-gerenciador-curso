import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss', './../../app.component.scss']
})
export class RegisterUserComponent implements OnInit {

  private user: User;
  private errorEmail: String = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser(): void {
    this.userService.registerUser(this.user)
      .then((data: any) => {
        let user = JSON.stringify(data.result);
        localStorage.setItem('user', user);
        this.router.navigate(['/feed-list']);
      }).catch((err: any) => {
        if (err.error.email) {
          this.errorEmail = err.error.email[0];
          console.log(err.error);

        }
      });
  }
}
