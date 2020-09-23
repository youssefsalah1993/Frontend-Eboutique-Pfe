import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-client-auth-form',
  templateUrl: './client-auth-form.component.html',
  styleUrls: ['./client-auth-form.component.css']
})
export class ClientAuthFormComponent implements OnInit {

  isShown: boolean = false ; // hidden MessageSuccessFromInscription by default  
  msg : String;

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  isLoggedIn ;
  isAdmin;

  constructor(private route: ActivatedRoute,private authenticationService: AuthenticationService, 
    private router: Router) { }

  ngOnInit(): void {
  
    this.MessageSuccessFromInscription();
    this.isAuth();
  //  this.isAdmin = Cookie.get('isAdmin');
  
  }
  isAuth() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (!this.isLoggedIn){
      this.router.navigate(['/connection']);
    }else{
      this.router.navigate(['/index']);
    }
  }

  

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
     // Cookie.set('isAdmin', 'true');
      this.successMessage = 'Login Successful.';
      
      this.router.navigate(['/index']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }


   MessageSuccessFromInscription(){

    this.msg = this.route.snapshot.paramMap.get('msg');

    if(this.msg=="success"){
     this.isShown = ! this.isShown;
    }
  }

}
