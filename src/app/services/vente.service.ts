import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vente } from '../common/vente';


const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'POST , GET')
      .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private baseUrl = 'http://localhost:8082/api/ventes';
  

  constructor(private httpClient: HttpClient) { }

   getVenteList(): Observable<Vente[]> {
    return this.getVente(this.baseUrl);
  }

  getVenteListById(thVenteId: number): Observable<Vente[]> {
    const searchUrl =`${this.baseUrl}/search/findById?id=${thVenteId}`;
    return this.getVenteById(searchUrl);
  }

  searchVente(theKeyword: String): Observable<Vente[]> {
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByTitleVenteContaining?titleVente=${theKeyword}`;
    return this.getVente(searchUrl);
  }

  getVenteListByVille(thevilleId: number): Observable<Vente[]> {

    // need to build URL based on ville id 
    const searchUrl = `${this.baseUrl}/search/findByVilleId?villeId=${thevilleId}`;

    return this.getVente(searchUrl);
  }

  getVenteVilleDetails(venteId: number): Observable<String> {

    // need to build URL based on ville id 
    const searchUrls = `${this.baseUrl}/${venteId}/ville`;
    
    return this.getVille(searchUrls);
  }

  getVenteCategorieDetails(venteId: number): Observable<String> {

    // need to build URL based on ville id 
    const searchUrls = `${this.baseUrl}/${venteId}/categorie`;
    
    return this.getCategorie(searchUrls);
  }

  getVenteBoutiqueDetails(venteId: number,idOrName :boolean): Observable<String> {
    //idOrName : to choose between calling function to get id or name if true : id 
    // need to build URL based on ville id 
    const searchUrls = `${this.baseUrl}/${venteId}/boutique`;
    
    if(idOrName ==true){
      return this.getBoutiqueId(searchUrls);
    }else{
      return this.getBoutique(searchUrls);
    }
    
  }


  getVenteListByCategorie(theCatId: number): Observable<Vente[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategorieId?categorieId=${theCatId}`;

    return this.getVente(searchUrl);
  }

  getVenteListByBoutique(theBoutId: number): Observable<Vente[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByBoutiqueId?boutiqueId=${theBoutId}`;

    return this.getVente(searchUrl);
  }


  private getVente(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl)
      .pipe(
        map(response => response._embedded.ventes));
  }

  private getVenteById(searchUrl: string) {
    return this.httpClient.get<GetResponseById>(searchUrl)
      .pipe(
        map(response => response._embedded.ventes));
  }

  private getVille(searchUrl: string) {
    return this.httpClient.get<GetResponseVille>(searchUrl)
      .pipe(
        map(response => response.nomVille));
  }

  private getCategorie(searchUrl: string) {
    return this.httpClient.get<GetResponseCategorie>(searchUrl)
      .pipe(
        map(response => response.nomCategorie));
  }

  private getBoutique(searchUrl: string) {
    return this.httpClient.get<GetResponseBoutique>(searchUrl)
      .pipe(
        map(response => response.nomBoutique));
  }

  private getBoutiqueId(searchUrl: string) {
    return this.httpClient.get<GetResponseBoutiqueId>(searchUrl)
      .pipe(
        map(response => response.id));
  }


  createVente(vente: Vente): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/search/insertUser?id_utilisateur=${vente.utilisateur.id}&id_categorie=${vente.categorie.id}&id_modele=${vente.modele.id}&id_ville=${vente.ville.id}&id_utilisateur_aprouvee=${vente.utilisateur.id}&id_boutique=${vente.boutique.id}&approuve=${vente.apro}&titre=${vente.titleVente}&image=${vente.imageUrl}&description=${vente.description}&prix=${vente.prix}&vendu=${vente.apro}`
 , {headers});
  }

  

  createVille(ville: String): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/search/insertUser?name=${ville}`,{headers})
  }
  


}



interface GetResponse {
  _embedded: {
    ventes: Vente[];
  }
}

interface GetResponseById {
  _embedded: {
    ventes: Vente[];
  }
}

interface GetResponseVille {
 
    nomVille : String;
  
}

interface GetResponseCategorie {
 
  nomCategorie : String;

}

interface GetResponseBoutique {
 
  nomBoutique : String;

}

interface GetResponseBoutiqueId {
 
  id : String;

}

