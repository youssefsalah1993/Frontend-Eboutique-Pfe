import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modele } from '../common/modele';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  private baseUrl = 'http://localhost:8082/api/modeles';

  constructor(private httpClient: HttpClient) { }

  getModeleList(): Observable<Modele[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.modeles)

      
    );
  }

  getModeleListByMarque(theMarqueId: number): Observable<Modele[]> {

    // need to build URL based on ville id 
    const searchUrl = `${this.baseUrl}/search/findByMarqueId?marqueId=${theMarqueId}`;

    return this.getModele(searchUrl);
  }

  //get Modeles by url (details)
  private getModele(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl)
      .pipe(
        map(response => response._embedded.modeles));
  }

  

}

interface GetResponse {
  _embedded: {
    modeles: Modele[];
  }
}