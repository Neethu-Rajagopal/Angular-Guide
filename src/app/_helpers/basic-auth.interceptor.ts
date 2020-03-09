import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

//The Basic Authentication Interceptor intercepts http requests from the application to add basic authentication credentials to the
//Authorization header if the user is logged in.
//It's implemented using the HttpInterceptor class included in the HttpClientModule, by extending the HttpInterceptor class you can create
//a custom interceptor to modify http requests before they get sent to the server.
//Http interceptors are added to the request pipeline in the providers section of the _app.module.ts_ file.

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.authdata) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.authdata}`
        }
      });
    }

    return next.handle(request);
  }
}
