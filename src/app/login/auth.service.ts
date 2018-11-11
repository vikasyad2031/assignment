import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    y = {
        name: "",
        id: "",
        username: "",
        phone: "",
        loggedInStatus: false
    }

    loginDetails = JSON.parse(localStorage.getItem("userDetails")) ? JSON.parse(localStorage.getItem("userDetails")) : this.y;

  	constructor() { }

    setUserDetails(name, id, username, phone, status) {

        var userDetail = {
            "name": name,
            "id": id,
            "username": username,
            "phone": phone,
            "loggedInStatus": status
        }

        this.loginDetails = userDetail;

        localStorage.setItem("userDetails", JSON.stringify(userDetail));
    }

    get Details() {
        return this.loginDetails;
    }

    get userDetails() {
        var status = JSON.parse(localStorage.getItem("userDetails")) ? JSON.parse(localStorage.getItem("userDetails")).loggedInStatus : false;
        return status;
    }

}
