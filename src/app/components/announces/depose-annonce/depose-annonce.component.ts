import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/common/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { VenteService } from 'src/app/services/vente.service';
import { Vente } from 'src/app/common/vente';
import { Ville } from 'src/app/common/ville';
import { VilleService } from 'src/app/services/ville.service';
import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from 'src/app/common/marque';
import { ModeleService } from 'src/app/services/modele.service';
import { Modele } from 'src/app/common/modele';
import { SousCategorie } from 'src/app/common/sous-categorie';
import { SousCategorieService } from 'src/app/services/sous-categorie.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface SousCat {
  value: string;
  viewValue: string;
}

interface Cat {
  disabled?: boolean;
  name: string;
  sousCat: SousCat[];
}

@Component({
  selector: 'app-depose-annonce',
  templateUrl: './depose-annonce.component.html',
  styleUrls: ['./depose-annonce.component.css']
})
export class DeposeAnnonceComponent implements OnInit {

  catControl = new FormControl();

  cats: Cat[] = [
    {
      name: 'Essuie-glaces',
      sousCat: [
        {value: 'bulbasaur-0', viewValue: 'Balai dessuie-glaces'},
        {value: 'oddish-1', viewValue: 'Tuyauterie Essuie-Glaces'},
        {value: 'bellsprout-2', viewValue: 'Moteur Essuie-Glaces'}
      ]
    },
    {
      name: 'Freinage',
      sousCat: [
        {value: 'squirtle-3', viewValue: 'Plaquettes de frein'},
        {value: 'psyduck-4', viewValue: 'Disques de frein'},
        {value: 'horsea-5', viewValue: 'Freins à tambours'}
      ]
    },
    // {
    //   name: 'Filtration',
    //   disabled: true,
    //   sousCat: [
    //     {value: 'charmander-6', viewValue: 'Charmander'},
    //     {value: 'vulpix-7', viewValue: 'Vulpix'},
    //     {value: 'flareon-8', viewValue: 'Flareon'}
    //   ]
    // },
    {
      name: 'Embrayage',
      sousCat: [
        {value: 'mew-9', viewValue: 'Embrayages et volants moteurs'},
        {value: 'mewtwo-10', viewValue: 'Embrayages et volants moteurs'},
      ]
    }
  ];





  categories : Categorie[];
  sousCategories : SousCategorie[];
  marques : Marque[];
  modeles : Modele[];
  vente : Vente = new Vente();
  ville : Ville = new Ville() ;
  submitted = false;

  constructor(private marqueService : MarqueService,private sousCategorieService : SousCategorieService,
    private modeleService : ModeleService,private categorieService : CategorieService,
    private villeService : VilleService,private venteService : VenteService, private router: Router) { }

  ngOnInit(): void {
    
  this.listCategorie();
  this.listMarque() ;
  this.listSousCategorieByCategorie(2);
  console.log(this.cats);
  //this.listModeleByMarque("2");

  
  }
  display = false;
  onCodeChange($event){
// this.country = $event.target.value;
var x = $event.target.value;
var y: number = parseInt(x);
if(x!=0){
  this.listModeleByMarque(y);
  this.display = true;
}else{
  this.display = false;
  this.modeles = null;
}
   
  }

  listModeleByMarque(idMarque : number) {
    this.modeleService.getModeleListByMarque(idMarque).subscribe(
      data => {
        this.modeles = data;
        
      }
    )
  }

  listSousCategorieByCategorie(idCat : number) {
    this.sousCategorieService.getSousCategorieListByCategorie(idCat).subscribe(
      data => {
        this.sousCategories = data;
        console.log(this.sousCategories);
      }
    )
  }
  

  listMarque() {
    this.marqueService.getMarqueList().subscribe(
      data => {
        this.marques = data;
      }
    )
  }

  //full : Categorie et SousCategories
  listCategorie() {
    this.categorieService.getCategorieList().subscribe(
      data => {
        this.categories = data;
        for (let index = 0; index < this.categories.length; index++) {
          this.sousCategorieService.getSousCategorieListByCategorie(this.categories[index].id).subscribe(
            data => {
              this.sousCategories = data;
              this.categories[index].sousCategories = this.sousCategories;
            }
          )
            
        }
        
        console.log(this.categories);
      }     
    )
    
  }

  save() {

    //this.vente.imageUrl = "test";
    this.vente.sold = false;
    this.vente.apro = false;
    this.vente.utilisateur.id = 6;
    this.vente.boutique.id = 1;
   // this.vente.modele.id = 2;
   //  this.vente.marque.id =0;
    
    // this.vente.sousCategorie.id = 2;
    this.vente.ville.id = 5;
    console.log(this.vente);
    // this.venteService.createVente(this.vente)
    //   .subscribe(data => console.log(data), error => console.log(error));
    //   this.vente = new Vente();
    //   this.vente.imageUrl = "test";
    // this.vente.sold = false;
    // this.vente.apro = false;
    // this.vente.utilisateur.id = 6;
    // this.vente.boutique.id = 1;
    // this.vente.modele.id = 2;
    // this.vente.categorie.id = 2;
    // this.vente.ville.id = 5;
    
    //  console.log(this.vente);

    //  const current = new Date();
    //  const timestamp = current.getTime();
    //  this.venteService.createVille("salah")
    //   .subscribe(data => console.log(data), error => console.log(error));
    //   this.ville = new Ville("salah",current,current);
    
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/connection']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
