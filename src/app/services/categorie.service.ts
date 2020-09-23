import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categorie } from '../common/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:8082/api/categories';

  constructor(private httpClient: HttpClient) { }

  getCategorieList(): Observable<Categorie[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.categories)

      
    );
  }

}

interface GetResponse {
  _embedded: {
    categories: Categorie[];
  }
}