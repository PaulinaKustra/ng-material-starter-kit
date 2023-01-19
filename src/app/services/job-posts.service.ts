import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {JobPostsModel} from "../models/job-posts.model";
import {TagsModel} from "../models/tags.model";

@Injectable()
export class JobPostsService {

  getPosts(): Observable<JobPostsModel[]> {
    return this._httpClient.get<JobPostsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts').pipe
    (map(posts => posts.filter(post => post.jobTagIds.length > 0)));
  }

  getTags(id: any): Observable<TagsModel> {
    return this._httpClient.get<TagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  constructor(private _httpClient: HttpClient) {
  }
}
