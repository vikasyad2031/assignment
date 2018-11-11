import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import * as $ from 'jquery';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	  properties;
    newProp: any[] = [];
    currentProperty;
    response;
    response1;
    currentInterests = [];
    currentInterestsStatus;
    user;

  	constructor(private auth: AuthService, private http: HttpClient) {
        this.user = this.auth.Details.name;
    }

  	ngOnInit() {
    		this.http.get("http://www.raviiprakash.tk/config/fetch_property.php") 
  		  .subscribe(data => {
  			    this.properties = data;

  			    if (this.auth.userDetails) {
                  var userId = this.auth.Details.id;
                  for (var i = 0; i < this.properties.length; ++i) {
                      if (this.properties[i].owner_id == userId) {
                          this.newProp.push(this.properties[i]);
                      }
                  }
              } else {
                  this.newProp = this.properties;
              }
  		  })
  	}

  	setDelProperty(property) {
  		  this.currentProperty = property;
  	}

  	deleteProperty() {
    		var propertyId = this.currentProperty.id;
        var data = {
            "id": propertyId
        }
        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }

    		this.http.post("http://www.raviiprakash.tk/config/delete_property.php", data, config).subscribe(data => {
    			  window.location.reload();
    		})
  	}

    getCurrentInterest(propId) {
        this.currentInterests = [];
        var data = {
            "prop_id": propId
        }
        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }

        this.http.post("http://www.raviiprakash.tk/config/get_current_interested.php", data, config).subscribe(data => {
            this.response1 = data;

            if (this.response1.length == 0) {
                this.currentInterestsStatus = false;
            } else {
                this.currentInterestsStatus = true;
                this.currentInterests = this.response1;
            }
        })
    }


}
