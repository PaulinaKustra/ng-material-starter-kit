import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JobPostsModel} from '../models/job-posts.model';

@Injectable()
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll()
    :
    Observable<JobPostsModel[]> {
    return this._httpClient.get<JobPostsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }

  getAllTags()
    :
    Observable<JobPostsModel[]> {
    return this._httpClient.get<JobPostsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}
