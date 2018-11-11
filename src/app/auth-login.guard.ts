import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router) {}

  	canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  		
    	if (this.auth.userDetails) {
	    	this.router.navigate(["dashboard"]);
	    	return false;
	    } else {
	    	return true;
	    }
  	}
}
