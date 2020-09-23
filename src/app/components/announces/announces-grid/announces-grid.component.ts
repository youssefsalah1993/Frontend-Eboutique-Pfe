import { Component, OnInit } from '@angular/core';
import { Vente } from 'src/app/common/vente';
import { VenteService } from 'src/app/services/vente.service';
import { ActivatedRoute } from '@angular/router';
import { Ville } from 'src/app/common/ville';


@Component({
  selector: 'app-announces-grid',
  templateUrl: './announces-grid.component.html',
  styleUrls: ['./announces-grid.component.css']
})
export class AnnouncesGridComponent implements OnInit {
  //list of annonces
  ventes: Vente[];
  villes : Ville[];
  tests : String[]=[];
  nomCat : String[]=[];
  nomBout: String[]=[];
  currentVilleId: number;
  currentCatId : number;
  searchMode: boolean;
  villeMode : boolean;
  categorieMode : boolean;
  currentBoutId : number;
 BoutiqueMode : boolean;

 //ventess:Vente = new Vente; 


  Arr = Array; //Array type captured in a variable for loop uses
  num: number = 3; //for number incrementation and number of columns of the annonce grid

  ventesLength: number; // length of ventes list
  indexVentes: number; // index number for ventes list (incremented)
  rowGrid: number; // number of row  




  constructor(private venteService: VenteService, private route: ActivatedRoute) { }


  ngOnInit() {

    //initial list vente
    this.listVente();
    // this.ventess = new Vente();
    // this.ventess.boutique.nomBoutique ="ff";
    // console.log(this.ventess.boutique.nomBoutique);

  }
  listVente() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    this.villeMode =this.route.snapshot.paramMap.has('id');
    this.BoutiqueMode =this.route.snapshot.paramMap.has('id');
    this.categorieMode =this.route.snapshot.paramMap.has('idC');
    if (this.searchMode) {
      this.handleSearchVente();
    }else if(this.BoutiqueMode){
      this.handleSearchVenteByBoutique()
      console.log("yeap21");
    }
    else if(this.villeMode) {
      this.handleSearchVenteByVille()
      console.log("yeap1");
    }else if(this.categorieMode){
      this.handleSearchVenteByCategorie()
      console.log("yeap2");
    }else{
      this.handleListVente();
    }

    console.log('sss');



  }

  handleSearchVenteByBoutique() {

    const hasBoutId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasBoutId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentBoutId = +this.route.snapshot.paramMap.get('id');
      console.log("yeap to" + this.currentBoutId);
    }else {
      console.log("nop");
    }
 
    // now get the products for the given category id
    this.venteService.getVenteListByBoutique(this.currentBoutId).subscribe(
      data => {
        this.ventes = data;
        console.log(this.ventes);
        this.venteDetails();
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
    this.venteService.getVenteListByVille(this.currentVilleId).subscribe(
      data => {
        this.ventes = data;
        this.venteDetails();
         this.gridSizing();

      }
    )
  }

  handleSearchVenteByCategorie() {

    const hasCatId: boolean = this.route.snapshot.paramMap.has('idC');
    if (hasCatId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCatId = +this.route.snapshot.paramMap.get('idC');
      console.log("yeap");
    }else {
      console.log("nop");
    }

    // now get the products for the given category id
    this.venteService.getVenteListByCategorie(this.currentCatId).subscribe(
      data => {
        this.ventes = data;
        this.venteDetails();
         this.gridSizing();
      }
    )
  }

  handleSearchVente() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search for the ventes using keyword
    this.venteService.searchVente(theKeyword).subscribe(
      data => {
        this.ventes = data;

        this.venteDetails();

        this.gridSizing();

      }
    )
  }

  

  handleListVente() {
    //  get the Ventes
    
    this.venteService.getVenteList().subscribe(
      data => {
        
        this.ventes = data;
        console.log("a" + data.length);
      
        this.venteDetails();
         
      
       this.gridSizing();

      }     
    )
   
    

  }



  private gridSizing() {

    //get length of vente list
    this.ventesLength = this.ventes.length;

    //divide length into the num of rows and parse it to decimal number exp : 5.66 =>5
    this.rowGrid = Math.floor(this.ventesLength / this.num);

    //control the formula of rowGrid if 0 or has a modulo and increment the row grid
    if ((this.rowGrid < 1) || (this.ventesLength % this.num != 0)) {

      this.rowGrid = this.rowGrid + 1;

    }
  }

  private venteDetails (){
    for (let t of this.ventes) {
      // console.log("c "+ this.ventes.find(x => x.id == t.id).titleVente + " " + t.id); 
    this.venteService.getVenteVilleDetails(t.id).subscribe(
            data => {
            
           this.tests.push(data);
          console.log("b " + this.tests);
            }     
          )
          this.venteService.getVenteCategorieDetails(t.id).subscribe(
            data => {
            
           this.nomCat.push(data);
          console.log("b " + this.nomCat);
            }     
          )
          this.venteService.getVenteBoutiqueDetails(t.id,false).subscribe(
            data => {
            
           this.nomBout.push(data);
          console.log("b " + this.nomBout);
            }     
          )

    }
  }

  

// function to set the index to 0
setIndexVente(){
  this.indexVentes = 0;
}

// function to increment the index 
incIndexVente(){

  this.indexVentes = (this.indexVentes + 1);
}


}
