import { Component, OnInit } from '@angular/core';
import { Modele } from 'src/app/common/modele';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.css']
})
export class ModeleListComponent implements OnInit {

  modeles : Modele[];

  constructor(private modeleService: ModeleService) { }

  ngOnInit() {
    this.listModeles();
  }

  listModeles() {
    this.modeleService.getModeleList().subscribe(
      data => {
        this.modeles = data;
      }
    )
  }
  
  

}


