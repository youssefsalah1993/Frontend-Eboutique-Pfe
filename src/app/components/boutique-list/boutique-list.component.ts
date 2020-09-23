import { Component, OnInit } from '@angular/core';
import { Boutique } from 'src/app/common/boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.css']
})
export class BoutiqueListComponent implements OnInit {
  boutiques : Boutique[];
  
  constructor(private boutiqueService: BoutiqueService) { }

  ngOnInit() {
    this.listBoutique();
  }

  listBoutique() {
    this.boutiqueService.getBoutiqueList().subscribe(
      data => {
        this.boutiques = data;
      }
    )
  }
  
  

}
