import { Component, OnInit } from '@angular/core';
import { VenteService } from 'src/app/services/vente.service';
import { ActivatedRoute } from '@angular/router';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Boutique } from 'src/app/common/boutique';

@Component({
  selector: 'app-announces-details-boutiquecard',
  templateUrl: './announces-details-boutiquecard.component.html',
  styleUrls: ['./announces-details-boutiquecard.component.css']
})
export class AnnouncesDetailsBoutiquecardComponent implements OnInit {

  idBoutique : String;
  nomCat : String;
  boutiques : Boutique[];
  constructor(private venteService : VenteService,private boutiqueService : BoutiqueService
    ,private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.getBoutiqueDetails();
  }

  getBoutiqueDetails(){

    const id : number = Number(this.route.snapshot.paramMap.get('id')); 
    console.log("d" +id);
    
    
    this.venteService.getVenteBoutiqueDetails(id,true).subscribe(
      data => {
       // this.ventes = new Vente(data);
        this.idBoutique = data;
        console.log("data  "+this.idBoutique)
    this.boutiqueDetails(this.idBoutique);
        
  
      }

      
    )
    

  }

  

   boutiqueDetails(id : String){

    this.boutiqueService.getBoutiqueById(id).subscribe(
      data => {
      
      this.boutiques =data;
    console.log(this.boutiques);
      }     
    )

   }
  

}
