import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {JobPostsModel} from '../models/job-posts.model';
import {JobTagsModel} from "../models/job-tags.model";

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
    Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

  getAllWithTags():
    Observable<JobPostsModel[]> {
    var subject = new Subject<JobPostsModel[]>();
    this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags').subscribe(jobTags => {
      this._httpClient.get<JobPostsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts').subscribe(jobs => {
        for (let i = 0; i < jobs.length; i++) {
          jobs[i].jobTags = [];
          for (let j = 0; j < jobs[i].jobTagIds.length; j++) {
            let tag = jobTags.find(x => x.id == jobs[i].jobTagIds[j]);
            if (tag) {
              jobs[i].jobTags.push(tag);
            }
          }
          jobs[i].jobTagsNames = jobs[i].jobTags.map(x => x.name).join(', ');
        }
        subject.next(jobs);
      })
    })
    return subject.asObservable();
  }
}
