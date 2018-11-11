import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../login/auth.service';

@Component({
	selector: 'app-add-property',
	templateUrl: './add-property.component.html',
	styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
    title;
    desc;
    location;
    price;
  	response;
  	successMsgStatus;
  	successMsg;

  	constructor(private http: HttpClient, private auth: AuthService) { }

  	ngOnInit() {
  	}

  	addProp(property: NgForm) {
  		var ownerId = this.auth.Details.id;
      var data = {
          "owner_id": ownerId,
          "property_name": this.title,
          "property_desc": this.desc,
          "property_location": this.location,
          "property_price": this.price
      }
      var config = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
      }

  		this.http.post("http://www.raviiprakash.tk/config/add_property.php", data, config).subscribe(data => {
  			this.response = data;
        
  			if (this.response.status) {
  				this.successMsgStatus = true;
  				this.successMsg = "Property added successfully, check your dashboard.";
  			}
  		})
  	}

}
