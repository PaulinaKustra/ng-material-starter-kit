import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {UsersModel} from "../models/users.model";
import {UserPostModel} from "../models/user-post.model";
import {NestedUserModel} from "../models/nested-user.model";

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllRoles(): Observable<UsersModel[]> {
    var subject = new Subject<UsersModel[]>();
    this._httpClient.get<UsersModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles').subscribe(data =>
      subject.next(data.slice(0, 3))
    );
    return subject.asObservable();
  }
  submit(user: UserPostModel){
    console.log("wysylamy: " , user)
    this._httpClient.post('https://636ce2d8ab4814f2b2712854.mockapi.io/user',  user).subscribe(data => {
      console.log("user submitted", data);
    })
  }

  submitNestedForm(user: NestedUserModel){
    this._httpClient.post<any>('https://fakestoreapi.com/users', user).subscribe(data => {
      console.log("user submitted", data);
    })
  }
}
