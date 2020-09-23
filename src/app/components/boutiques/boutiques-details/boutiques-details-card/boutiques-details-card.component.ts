import { Component, OnInit } from '@angular/core';
import { Boutique } from 'src/app/common/boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boutiques-details-card',
  templateUrl: './boutiques-details-card.component.html',
  styleUrls: ['./boutiques-details-card.component.css']
})
export class BoutiquesDetailsCardComponent implements OnInit {

  boutiques : Boutique[];
  constructor(private boutiqueService : BoutiqueService
    ,private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.getBoutiqueDetails();
  }

  getBoutiqueDetails(){

    const id : String =this.route.snapshot.paramMap.get('id'); 
    console.log("d" +id);
    
    
    this.boutiqueService.getBoutiqueById(id).subscribe(
      data => {
       // this.ventes = new Vente(data);
        this.boutiques = data;
        console.log("data  "+this.boutiques)
    
        
  
      }

      
    )
    

  }

}
