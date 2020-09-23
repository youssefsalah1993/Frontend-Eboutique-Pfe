import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/common/ville';
import { Boutique } from 'src/app/common/boutique';
import { VilleService } from 'src/app/services/ville.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-create-boutique',
  templateUrl: './create-boutique.component.html',
  styleUrls: ['./create-boutique.component.css']
})
export class CreateBoutiqueComponent implements OnInit {

  villes : Ville[];
  boutique :Boutique = new Boutique();

  submitted = false;
 
   
   constructor(private villeService: VilleService,private boutiqueService: BoutiqueService,
     private route :ActivatedRoute,private router: Router) {
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
 } 
    }
 
   ngOnInit(): void {
     this.listville();
   }
 
   listville() {
       this.villeService.getVilleList().subscribe(
         data => {
           this.villes = data;
         }
       )
     
 
      }
 
     
 
      save() {
       this.boutique.user.id=6;
       
       console.log(this.boutique);
       this.boutiqueService.createBoutique(this.boutique)
         .subscribe(data => console.log(data), error => console.log(error));
       
       
         this.gotoList("success");
       }
     
       gotoList(value :String) {
         this.router.navigate([`/boutiques`]);
       }
     onSubmit() {
       this.submitted = true;
       this.save();    
     }

}
