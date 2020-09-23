import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/common/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-welcome-categorie-popul',
  templateUrl: './welcome-categorie-popul.component.html',
  styleUrls: ['./welcome-categorie-popul.component.css']
})
export class WelcomeCategoriePopulComponent implements OnInit {

  categoriess : Categorie[];

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.listCategorie();
  }

  listCategorie() {
    this.categorieService.getCategorieList().subscribe(
      data => {
        this.categoriess = data;
      }
    )
  }
  

}
