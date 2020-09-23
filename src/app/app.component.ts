import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';



localStorage.setItem('currentUser', "yourUser");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent implements OnInit{
  title = ' eboutique Prject ';

  isLoggedIn=false ;
  isLogged=false;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (this.isLoggedIn==true) {
      this.isLogged ==true;
    }
    console.log(this.isLogged);
    this.authenticationService.getLoggedInUserName();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }

  open() {
    if (!this.isLoggedIn){
      this.router.navigate(['/connection']);
    }else{
      this.router.navigate(['/announces/depose']);
    }
  }

  
}
