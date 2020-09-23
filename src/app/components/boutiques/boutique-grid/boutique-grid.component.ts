import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ActivatedRoute } from '@angular/router';
import { Ville } from 'src/app/common/ville';
import { Boutique } from 'src/app/common/boutique';

@Component({
  selector: 'app-boutique-grid',
  templateUrl: './boutique-grid.component.html',
  styleUrls: ['./boutique-grid.component.css']
})
export class BoutiqueGridComponent implements OnInit {

  boutiques : Boutique[];
  //test = nomVille
  tests : String[]=[];
  villes : Ville[];
  currentVilleId: number;
  searchMode: boolean;
  villeMode : boolean;


  Arr = Array; //Array type captured in a variable for loop uses
  num: number = 3; //for number incrementation and number of columns of the annonce grid

  boutiqueLength: number; // length of ventes list
  indexBoutiques: number; // index number for ventes list (incremented)
  rowGrid: number; // number of row

  constructor(private boutiqueService: BoutiqueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listBoutique();
  }

  listBoutique() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    this.villeMode =this.route.snapshot.paramMap.has('id');

    if (this.searchMode) {
      this.handleSearchBoutique();
    }
    else if(this.villeMode) {
      this.handleSearchVenteByVille()
      console.log("yeap1");
    }else{
      this.handleListBoutique();
    }

  }

  handleListBoutique() {
    //  get the boutiques
    
    this.boutiqueService.getBoutiqueList().subscribe(
      data => {
        
        this.boutiques = data;
        console.log("a" + data.length);
      
        this.boutiqueDetails();
         
      
       this.gridSizing();

      }     
    ) 

  }


  handleSearchBoutique() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search for the ventes using keyword
    this.boutiqueService.searchBoutique(theKeyword).subscribe(
      data => {
        this.boutiques = data;

        this.boutiqueDetails();

        this.gridSizing();

      }
    )
  }

  handleSearchVenteByVille() {

    const hasVilleId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasVilleId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentVilleId = +this.route.snapshot.paramMap.get('id');
      console.log("yeap");
    }else {
      console.log("nop");
    }

    // now get the products for the given ville id
    this.boutiqueService.getBoutiqueListByVille(this.currentVilleId).subscribe(
      data => {
        this.boutiques = data;
        this.boutiqueDetails();
         this.gridSizing();

      }
    )
  }



  private boutiqueDetails (){
    for (let t of this.boutiques) {
      console.log(t.id);

      // console.log("c "+ this.ventes.find(x => x.id == t.id).titleVente + " " + t.id); 
    this.boutiqueService.getBoutiqueVilleDetails(t.id).subscribe(
            data => {
            
           this.tests.push(data);
          console.log("b " + this.tests);
            }     
          )
          

    }
  }

  private gridSizing() {

    //get length of vente list
    this.boutiqueLength = this.boutiques.length;

    //divide length into the num of rows and parse it to decimal number exp : 5.66 =>5
    this.rowGrid = Math.floor(this.boutiqueLength / this.num);

    //control the formula of rowGrid if 0 or has a modulo and increment the row grid
    if ((this.rowGrid < 1) || (this.boutiqueLength % this.num != 0)) {

      this.rowGrid = this.rowGrid + 1;

    }
  }


  // function to set the index to 0
setIndexBoutique(){
  this.indexBoutiques = 0;
}

// function to increment the index 
incIndexVente(){

  this.indexBoutiques = (this.indexBoutiques + 1);
}



}
