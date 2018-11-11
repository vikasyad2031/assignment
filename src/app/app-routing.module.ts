import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AuthLoginGuard } from './auth-login.guard';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
	{ 
		path: "dashboard", 
		component: DashboardComponent,
		canActivate: [AuthGuard] 
	},
	{ 
		path: "property", 
		component: PropertyListComponent
	},
	{ 
		path: "addProperty", 
		component: AddPropertyComponent,
		canActivate: [AuthGuard] 
	},
	{ 
		path: "login", 
		component: LoginComponent,
		canActivate: [AuthLoginGuard]
	},
	{ 
		path: "signUp", 
		component: SignUpComponent,
		canActivate: [AuthLoginGuard]
	},
	{ 
		path: "", 
		component: PropertyListComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
