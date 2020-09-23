import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/common/ville';
import { VilleService } from 'src/app/services/ville.service';


@Component({
  selector: 'app-welcome-ville-popul',
  templateUrl: './welcome-ville-popul.component.html',
  styleUrls: ['./welcome-ville-popul.component.css']
})
export class WelcomeVillePopulComponent implements OnInit {

  villes : Ville[];
  
  constructor(private villeService: VilleService) { }

  ngOnInit() {
    this.listville();
  }

  listville() {
    this.villeService.getVilleList().subscribe(
      data => {
        this.villes = data;
      }
    )
  }

}
