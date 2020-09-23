import { Ville } from './ville';
import { Utilisateur } from './utilisateur';

export class Boutique {

    id : number;
    nomBoutique : String;
    adresseBoutique: String;
    descriptionBoutique : String;
    tel1Boutique: String;
    tel2Boutique :String;
    urlCover:String;
    dateCreation :Date;
    dateModification :Date;

    ville : Ville = new Ville();
    user : Utilisateur = new Utilisateur();
    

}
