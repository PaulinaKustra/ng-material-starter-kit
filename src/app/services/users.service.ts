import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsersModel} from "../models/users.model";
import {UserPostModel} from "../models/user-post.model";

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UsersModel[]> {
    return this._httpClient.get<UsersModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
  submit(user: UserPostModel){
    this._httpClient.post<any>('https://636ce2d8ab4814f2b2712854.mockapi.io/user', user).subscribe(data => {
      console.log("user submitted", data);
    })
  }
}
