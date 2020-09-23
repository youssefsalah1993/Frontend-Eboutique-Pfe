import { Component, OnInit } from '@angular/core';
import { AnnouncesGridComponent } from '../../announces-grid/announces-grid.component';
import { Vente } from 'src/app/common/vente';
import { VenteService } from 'src/app/services/vente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announces-details-ventecard',
  templateUrl: './announces-details-ventecard.component.html',
  styleUrls: ['./announces-details-ventecard.component.css']
})
export class AnnouncesDetailsVentecardComponent implements OnInit {

  ventes : Vente[] ;
  nomCat : String;
  idBoutique : number;
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private venteService : VenteService,private route: ActivatedRoute) { 
   // AnnouncesGridComponent ann = new AnnouncesGridComponent();;
  }

  
  ngOnInit(): void {
    this.theVenteById();
  }

   theVenteById(){
    //  id: number = ;
    const id : number = Number(this.route.snapshot.paramMap.get('id'));  
    console.log(id);
    this.venteService.getVenteListById(id).subscribe(
      data => {
       // this.ventes = new Vente(data);
        this.ventes = data;
        console.log(this.ventes);
        this.venteCategorie();

      }
    )

    

   }

   private venteCategorie(){
    const id : number = Number(this.route.snapshot.paramMap.get('id')); 
    this.venteService.getVenteCategorieDetails(id).subscribe(
      data => {
      
     this.nomCat=data;
    console.log("b " + this.nomCat);
      }     
    )

   }

  

}
