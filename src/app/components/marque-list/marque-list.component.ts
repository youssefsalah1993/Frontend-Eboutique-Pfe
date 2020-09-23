import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/common/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  marques : Marque[];

  constructor(private marqueService: MarqueService) { }

  ngOnInit() {
    this.listMarque();
  }

  listMarque() {
    this.marqueService.getMarqueList().subscribe(
      data => {
        this.marques = data;
      }
    )
  }
  
  

}
