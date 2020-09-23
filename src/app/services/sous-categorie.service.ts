import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousCategorie } from '../common/sous-categorie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  private baseUrl = 'http://localhost:8082/api/sousCategories';

  constructor(private httpClient: HttpClient) { }

  getSousCategorieList(): Observable<SousCategorie[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.sousCategories)
    );
  }

  getSousCategorieListByCategorie(theCategorieId: number): Observable<SousCategorie[]> {

    // need to build URL based on ville id 
    const searchUrl = `${this.baseUrl}/search/findByCategorieId?categorieId=${theCategorieId}`;

    return this.getSousCategorie(searchUrl);
  }

  //get SousCategorie by url (details)
  private getSousCategorie(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl)
      .pipe(
        map(response => response._embedded.sousCategories));
  }

}


interface GetResponse {
  _embedded: {
    sousCategories: SousCategorie[];
  }
}
