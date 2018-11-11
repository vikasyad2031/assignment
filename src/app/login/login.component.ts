import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	  email;
	  password;
	  response;
    loginMsg;
    loginMsgStatus = false;

  	constructor(private _http: HttpClient, 
  				private auth: AuthService, 
  				private location: Location, 
  				private router: Router) {

  	}

  	ngOnInit() {
  	}

  	login(loginForm: NgForm): void {
        this.loginMsgStatus = false;
        var data = {
          "username": this.email,
          "password": this.password
        }
        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }

    		this._http.post("http://www.raviiprakash.tk/config/login.php", data, config).subscribe(data => {
        					this.response = data;
        					if (this.response.status) {
                      this.auth.setUserDetails(this.response.name, this.response.user_id, this.response.username, this.response.phone, this.response.status);
          						this.router.navigate(["dashboard"]);
        					} else {
                      this.loginMsgStatus = true;
                      this.loginMsg = this.response.msg;
                  }
        		  })
  	}

  	navToSignup() {
        this.router.navigate(["signUp"]);
    }

}
