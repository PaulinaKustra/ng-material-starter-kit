import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagModel } from '../models/job-tag.model';

@Injectable()
export class JobTagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getSingleTag(id: string): Observable<JobTagModel> {
    return this._httpClient.get<JobTagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  update(jobTag: JobTagModel): Observable<JobTagModel> {
    return this._httpClient.put<JobTagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + jobTag.id, jobTag);
  }
}