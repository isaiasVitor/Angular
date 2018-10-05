import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignosService {

  signoUrl = 'http://13.57.204.215/public/index.php/api/';
  constructor(private http: HttpClient) {

   }

   getAll() {
    return this.http.get<{any}>(`${this.signoUrl}` + 'getSigno');
   }
}
