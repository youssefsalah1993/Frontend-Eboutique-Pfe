import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ville } from '../common/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseUrl = 'http://localhost:8082/api/villes';

  constructor(private httpClient: HttpClient) { }

  getVilleList(): Observable<Ville[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.villes)

      
    );
  }

  getVilleLisById(theVilleId : number): Observable<Ville[]> {
//need to build  URL based on Ville id
    const searchUrl =`${this.baseUrl}/search/findByVilleId?id=${theVilleId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.villes)

      
    );
  }

  createVille(ville: String): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/search/insertuser?name=${ville}`, ville);
  }

}



interface GetResponse {
  _embedded: {
    villes: Ville[];
  }
}