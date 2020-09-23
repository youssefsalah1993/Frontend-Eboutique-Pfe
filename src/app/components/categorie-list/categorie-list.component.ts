import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/common/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-list',
  //templateUrl: './categorie-list.component.html',
  templateUrl: './categorie-dropdown-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories : Categorie[];

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.listCategorie();
  }

  listCategorie() {
    this.categorieService.getCategorieList().subscribe(
      data => {
        this.categories = data;
      }
    )
  }
  
  

}

