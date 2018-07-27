import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss', './../../app.component.scss']
})
export class RegisterUserComponent implements OnInit {

  private user: User;
  private errorEmail: String = '';
  constructor(
    private userService: UserService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser(): void {
    this.userService.registerUser(this.user)
      .then((data: any) => {
        localStorage.setItem("userName", data.result.name);
        localStorage.setItem("userLastname", data.result.lastname);
        localStorage.setItem("userapiToken", data.result.api_token);
        localStorage.setItem("userEmail", data.result.email);
      }).catch((err: any) => {
        if (err.error.email) {
          this.errorEmail = err.error.email[0];
          console.log(err.error);

        }
      });
  }
}
