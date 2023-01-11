import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginTokenModel} from "../models/login-token.model";
import {CredentialsModel} from "../models/credentials.model";

@Injectable()
export class LoginFormService {
  constructor(private _httpClient: HttpClient) {

  }

  login(login:string, pass:string)
  {
    let credentials : CredentialsModel= { username:login, password:pass } as CredentialsModel;
    this._httpClient.post<LoginTokenModel>('https://fakestoreapi.com/auth/login', credentials).subscribe(data => {
      console.log("doszedł token:", data.token);
    })
  }
}
