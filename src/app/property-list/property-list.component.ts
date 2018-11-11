import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import * as $ from 'jquery';

@Component({
  	selector: 'app-property-list',
  	templateUrl: './property-list.component.html',
  	styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
	properties;
    interested;
    newProp: any[] = [];
    response;
    intMsg;
    intFlag = false;

  	constructor(private http: HttpClient, private auth: AuthService) { }

  	ngOnInit() {

		this.http.get("http://www.raviiprakash.tk/config/fetch_property.php")
				.subscribe(data => {
  					this.properties = data;

                    if (this.auth.userDetails) {
                        var userId = this.auth.Details.id;
                        for (var i = 0; i < this.properties.length; ++i) {
                            if (this.properties[i].owner_id != userId) {
                                this.newProp.push(this.properties[i]);
                            }
                        }
                    } else {
                        this.newProp = this.properties;
                    }
  		        })
  	}

    toggleInterest(id, index) {
        var userId = this.auth.Details.id;
        var userName = this.auth.Details.name;
        var userPhone = this.auth.Details.phone;
        var propId = id;

        var data = {
            "user_id": userId,
            "prop_id": propId,
            "user_name": userName,
            "user_phone": userPhone
        }

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }
        
        // console.log(propId);

        // if (!this.auth.userDetails) {
        //     $("#loginModal").css("display", "block");
        //     $("#loginModal").addClass("in");
        // }

        if (!this.auth.userDetails) {
            this.intMsg = "Please login first";
        } else {
            this.http.post("http://www.raviiprakash.tk/config/fetch_interest.php", data, config).subscribe(data => {
                this.response = data;
                if (!this.response.status) {
                    alert("Something went wrong, please try again");
                } else {
                    this.intMsg = this.response.status;
                }
            })
        }  
    }
}
