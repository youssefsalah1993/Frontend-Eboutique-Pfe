import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit  {

  isLoggedIn=false;
  isLogged= false;

constructor(private authenticationService : AuthenticationService){}

  ngOnInit(): void {
    
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (this.isLoggedIn==true) {
      this.isLogged ==true;
    }
    console.log(this.isLogged);
    this.authenticationService.getLoggedInUserName();
    console.log('menu ->' + this.isLoggedIn);
  }

  

}
