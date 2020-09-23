import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  
  doSearch(value: string) {
    console.log(`value=${value}`);
    if(!value){
      this.router.navigateByUrl(`/announces`);
    }else{
      this.router.navigateByUrl(`/announces/search/${value}`);
    }
   
  }

}
