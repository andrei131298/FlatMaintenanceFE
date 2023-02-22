import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Association } from '../model/association';

@Injectable({
  providedIn: 'root',
})
export class AssociationService {
  baseUrl = environment.baseUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  constructor(private http: HttpClient) {}

  createAssociation(association: Association): Observable<Association> {
    return this.http.post<Association>(
      `${this.baseUrl}/association`,
      association,
      { headers: this.headers }
    );
  }
}
