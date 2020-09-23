import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Categorie } from 'src/app/common/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorie-drop-list',
  //templateUrl: './categorie-list.component.html',
  templateUrl: './categorie-dropdown-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieDropListComponent implements OnInit {

  catControl = new FormControl();
  
  categories : Categorie[];

  constructor(private categorieService: CategorieService,private router: Router) { }

  ngOnInit() {
    this.listCategorie();
  }

  doSearchC(value) {
    
    if(value == "categorie"){
      
    }else{
      console.log(`value=${value}`);
      this.router.navigateByUrl(`/announces/searchC/${value}`);
    }
   
  }

  listCategorie() {
    this.categorieService.getCategorieList().subscribe(
      data => {
        this.categories = data;
      }
    )
  }
  
  

}

