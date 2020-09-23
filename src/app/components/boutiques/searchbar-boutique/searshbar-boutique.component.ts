import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searshbar-boutique',
  templateUrl: './searshbar-boutique.component.html',
  styleUrls: ['./searshbar-boutique.component.css']
})
export class SearshbarBoutiqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    if(!value){
      this.router.navigateByUrl(`/boutiques`);
    }else{
      this.router.navigateByUrl(`/boutiques/search/${value}`);
    }
   
  }

}
