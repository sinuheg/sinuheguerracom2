import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { 
    
  }

  getProfile(){
    return this.http.get('/api/profile').map(res => res.json());
  }

}
