import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageserviceService {

  private http: HttpClient;

  constructor(private injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  getPackages() {
    return this.http.get('https://localhost:7117/api/Package');
  }
}
