import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/common/ville';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-ville-list',
  //templateUrl: './ville-list.component.html',
  templateUrl: './ville-dropdown-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {
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
