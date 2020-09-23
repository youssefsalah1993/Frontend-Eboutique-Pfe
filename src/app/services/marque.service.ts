import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marque } from '../common/marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private baseUrl = 'http://localhost:8082/api/marques';

  constructor(private httpClient: HttpClient) { }

  getMarqueList(): Observable<Marque[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.marques)

      
    );
  }

}

interface GetResponse {
  _embedded: {
    marques: Marque[];
  }
}