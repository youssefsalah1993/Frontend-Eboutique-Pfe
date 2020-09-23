import { Component, OnInit, Input } from '@angular/core';
import { VilleService } from 'src/app/services/ville.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/common/ville';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/common/utilisateur';
import { ClientAuthFormComponent } from '../client-auth-form/client-auth-form.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

 villes : Ville[];
 user : Utilisateur = new Utilisateur();
 submitted = false;
  hi: string;
   
   uer : String = localStorage.getItem('currentUser');

  
  constructor(private villeService: VilleService,private userService: UtilisateurService,
    private route :ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
} 
   }

  ngOnInit(): void {
    this.listville();
    console.log(this.uer);
   
  }

  listville() {
      this.villeService.getVilleList().subscribe(
        data => {
          this.villes = data;
        }
      )
    

     }

    

     save() {
      this.user.typeUser.id=1;
      
      console.log(this.user);
      this.userService.createUserCleint(this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      
      
        this.gotoList("success");
      }
    
      gotoList(value :String) {
        this.router.navigate([`/connection/${value}`]);
      }
    onSubmit() {
      this.submitted = true;
      this.save();    
    }

}
