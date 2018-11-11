import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	  isLoggedIn: boolean;

	  constructor(private auth: AuthService, private router: Router) {

    		router.events.subscribe( (event: Event) => {
                if (event instanceof NavigationStart) {
                    this.isLoggedIn = this.auth.userDetails;
                }
            });

	  }

    logout(): void {
        localStorage.removeItem("userDetails")
        window.open("login", "_self");
    }

}
