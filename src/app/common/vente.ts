import { Boutique } from './boutique';
import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';
import { Ville } from './ville';
import { Modele } from './modele';
import { Marque } from './marque';
import { SousCategorie } from './sous-categorie';


export class Vente {

    id : number;
    titleVente : String;
    description: String;
    prix: String;
    apro :Boolean;
    sold:Boolean;
    imageUrl :String;
    dateCreation :Date;
    dateModification :Date;
    
    boutique : Boutique = new Boutique();

    categorie : Categorie = new Categorie();

    sousCategorie : SousCategorie = new SousCategorie();

    utilisateur : Utilisateur = new Utilisateur();
    utilisateurApp : Utilisateur = new Utilisateur();

     ville : Ville = new Ville();

     marque : Marque = new Marque();

    modele : Modele = new Modele();

    
    
    // constructor(theapro :Boolean,thesold:Boolean,theimageUrl :String,
    //     theboutique : Boutique,thecategorie : Categorie,theutilisateur : Utilisateur,utilisateurApp: Utilisateur
    //     ,theville : Ville ) {
        
    //         // this.titleVente = thetitleVente;
    //         // this.description= thedescription;
    //         // this.prix= theprix;
    //         this.apro =theapro;
    //         this.sold=thesold;
    //         this.imageUrl =theimageUrl;
    //         this.boutique = theboutique;
    //         this.categorie=thecategorie;
    //         this.utilisateur=theutilisateur;
    //         this.utilisateurApp=theutilisateur;
    //         this.ville=theville;
            
    //     }

       


}
