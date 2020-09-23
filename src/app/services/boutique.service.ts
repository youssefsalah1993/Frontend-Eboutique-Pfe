import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boutique } from '../common/boutique';
import { Utilisateur } from '../common/utilisateur';

const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'POST , GET')
      .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private baseUrl = 'http://localhost:8082/api/boutiques';

  constructor(private httpClient: HttpClient) { }

//get all
  getBoutiqueList(): Observable<Boutique[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.boutiques)

      
    );
  }

  getBoutiqueById(id :String): Observable<Boutique[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/findById?id="+id).pipe(
      map(response => response._embedded.boutiques)

      
    );
  }

  getBoutiqueByUserId(user :Utilisateur): Observable<Boutique[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/findByUtilisateurId?utilisateurid="+user.id).pipe(
      map(response => response._embedded.boutiques)

      
    );
  }


  getBoutiqueListByVille(thevilleId: number): Observable<Boutique[]> {

    // need to build URL based on ville id 
    const searchUrl = `${this.baseUrl}/search/findByVilleId?villeId=${thevilleId}`;

    return this.getBoutique(searchUrl);
  }

  searchBoutique(theKeyword: String): Observable<Boutique[]> {
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNomBoutiqueContaining?nomBoutique=${theKeyword}`;
    return this.getBoutique(searchUrl);
  }

  createBoutique(boutique: Boutique): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/search/insertBoutique?id_utilisateur=${boutique.user.id}&id_ville=${boutique.ville.id}&nom_boutique=${boutique.nomBoutique}&adresse_boutique=${boutique.adresseBoutique}&description=${boutique.descriptionBoutique}&tel1=${boutique.tel1Boutique}&tel2=${boutique.tel2Boutique}&url_cover=${boutique.urlCover}`
 , {headers});
  }


  getBoutiqueVilleDetails(venteId: number): Observable<String> {

    // need to build URL based on ville id 
    const searchUrls = `${this.baseUrl}/${venteId}/ville`;
    
    return this.getVille(searchUrls);
  }

//get boutiques by url (details)
  private getBoutique(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl)
      .pipe(
        map(response => response._embedded.boutiques));
  }

  //get villes boutiques by url (details)
  private getVille(searchUrl: string) {
    return this.httpClient.get<GetResponseVille>(searchUrl)
      .pipe(
        map(response => response.nomVille));
  }

  

}



interface GetResponse {
  _embedded: {
    boutiques: Boutique[];
  }
}

interface GetResponseVille {
 
  nomVille : String;

}



