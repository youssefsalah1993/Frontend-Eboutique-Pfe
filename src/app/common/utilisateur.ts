import { TypeUser } from './type-user';
import { Ville } from './ville';

export class Utilisateur {

    id :number;
    nom :string;
    prenom :string;
    tel:string;
    email:string;
    address:String;
    password:string;
    dateCreation:Date;
    dateModification:Date;

    typeUser : TypeUser = new TypeUser();
    ville : Ville = new Ville();
}
