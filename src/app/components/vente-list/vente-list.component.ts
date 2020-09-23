import { Component, OnInit } from '@angular/core';
import { Vente } from 'src/app/common/vente';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-vente-list',
  templateUrl: './vente-list.component.html',
  styleUrls: ['./vente-list.component.css']
})
export class VenteListComponent implements OnInit {

  ventes : Vente[];
  
  constructor(private venteService: VenteService) { }

  ngOnInit() {
    this.listVente();
  }

  listVente() {
    this.venteService.getVenteList().subscribe(
      data => {
        this.ventes = data;
      }
    )
  }
  
  

}

