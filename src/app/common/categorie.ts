import { SousCategorie } from './sous-categorie';

export class Categorie {
    id : number;
    nomCategorie:String;
    dateCreation :Date;
    dateModification :Date;


    sousCategorie : SousCategorie = new SousCategorie();
    sousCategories : SousCategorie[];
    



}
