import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../common/utilisateur';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'POST , GET')
      .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = 'http://localhost:8082/api/utilisateurs';

  constructor(private httpClient: HttpClient) { }

  getUtilisateurList(): Observable<Utilisateur[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.utilisateurs)

      
    );
  }

  createUserCleint(user: Utilisateur): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/search/insertUserClient?id_type=${user.typeUser.id}&id_ville=${user.ville.id}&nom=${user.nom}&prenom=${user.prenom}&tel=${user.tel}&email=${user.email}&password=${user.password}`
 , {headers});
  }
}

interface GetResponse {
  _embedded: {
    utilisateurs: Utilisateur[];
  }
}
