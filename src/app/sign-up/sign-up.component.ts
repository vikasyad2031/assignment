import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    name;
    phone;
    email;
    password;
  	response;
  	loginMsg;
  	loginMsgStatus = false;

  	constructor(private router: Router, private http: HttpClient) { }

  	ngOnInit() {
  	}

  	navToSignin() {
        this.router.navigate(["login"]);
    }

    signup(formData: NgForm) {
        this.loginMsgStatus = false;

        var data = {
            "name": this.name,
            "phone": this.phone,
            "username": this.email,
            "password": this.password
        }

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }
       
      	this.http.post("http://www.raviiprakash.tk/config/signup.php", data, config).subscribe(data => {
        		this.response = data;
        		if (!this.response.status) {
        			this.loginMsgStatus = true;
        			this.loginMsg = this.response.msg;
        		}
        		if (this.response.status) {
        			this.loginMsgStatus = true;
        			this.loginMsg = "Account created successfully, Please login.";
        		}
      	})
    }

}
