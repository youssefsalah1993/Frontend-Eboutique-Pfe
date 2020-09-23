import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {
  test : String = sessionStorage.getItem("authenticatedUser");
  constructor(private router : Router) { }

  ngOnInit(): void {
  //this.cnx();
   console.log("log"+this.test);
  }

  // cnx (){
  //   if(!sessionStorage.getItem('authenticatedUser')){
  //     this.router.navigate(['/connection']);
  //     return false;
  //   }
  //   return true;
  // }

}
