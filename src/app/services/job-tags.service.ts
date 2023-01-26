import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagModel } from '../models/job-tag.model';
import {JobPostModel} from "../models/job-post.model";

@Injectable()
export class JobTagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getSingleTag(id: string): Observable<JobTagModel> {
    return this._httpClient.get<JobTagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  updateTag(jobTag: JobTagModel): Observable<JobTagModel> {
    return this._httpClient.put<JobTagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + jobTag.id, jobTag);
  }

  getAll(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

  getSinglePost(id: string): Observable<JobPostModel> {
    console.log("getSinglePost ",id)
    return this._httpClient.get<JobPostModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + id);
  }
  updatePost(jobPost: JobPostModel): Observable<JobPostModel> {
    console.log(JSON.stringify(jobPost));
    return this._httpClient.put<JobPostModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + jobPost.id, jobPost);
  }
}
