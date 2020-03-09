import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

//The user service contains a method for getting all users from the api, I included it to demonstrate accessing a secure api endpoint with the 
//http authorization header set after logging in to the application, the auth header is automatically set with basic authentication
//credentials by the basic authentication interceptor. The secure endpoint in the example is a fake one implemented in the fake backend provider

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.apiUrl}/users`);
  }
}
