import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeUser } from '../common/type-user';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {
  private baseUrl = 'http://localhost:8082/api/type_utilisateur';

  constructor(private httpClient: HttpClient) { }

  getTypeUserList(): Observable<TypeUser[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.typesUtilisateur)

      
    );
  }

}

interface GetResponse {
  _embedded: {
    typesUtilisateur: TypeUser[];
  }
}
