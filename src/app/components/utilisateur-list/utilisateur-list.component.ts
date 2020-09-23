import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/common/utilisateur';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  utilisateurs : Utilisateur[];
  
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.listUtilisateur();
  }

  listUtilisateur() {
    this.utilisateurService.getUtilisateurList().subscribe(
      data => {
        this.utilisateurs = data;
      }
    )
  }
  
  

}
