import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = 'https://api-colombia.com/api/v1/Department/';

  constructor(private _http: HttpClient) {}

  getDepartments() {
    return this._http.get(this.apiURL);
  }
  getOneDepartment(id: number) {
    return this._http.get(this.apiURL + id);
  }
  getMunicipalities(id: number) {
    return this._http.get(this.apiURL + id + '/cities');
  }
}
