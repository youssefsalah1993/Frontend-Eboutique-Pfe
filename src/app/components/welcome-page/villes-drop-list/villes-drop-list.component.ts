import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/common/ville';
import { VilleService } from 'src/app/services/ville.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villes-drop-list',
  templateUrl: './villes-drop-list.component.html',
  styleUrls: ['./villes-drop-list.component.css']
})
export class VillesDropListComponent implements OnInit {

  villes : Ville[];
  currentVilleId: number;
  
  constructor(private villeService: VilleService,private route :ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
} 
   }

  ngOnInit() {
   
      this.listville();
    
   
  }

  doSearchV(value) {
    
    if(value == "villes"){
      
    }else{
      console.log(`value=${value}`);
      this.router.navigateByUrl(`/announces/searchV/${value}`);
    }
   
  }
  

  listville() {

    

      //get the "id" param string then convert to string to a number using the "+" symbol
      this.currentVilleId = +this.route.snapshot.paramMap.get('id');
       

        this.villeService.getVilleList().subscribe(
          data => {
            this.villes = data;
          }
        )
      

       }

   

}
