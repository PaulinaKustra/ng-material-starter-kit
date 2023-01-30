import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CandidateModel } from '../models/candidate.model';
import { StatusModel } from '../models/status.model';
import {SkillsModel} from "../models/skills.model";

@Injectable()
export class CandidatesService {
  getAll(): Observable<CandidateModel[]> {
    return this._httpClient.get<CandidateModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/candidates');
  }

  getOne(id: string): Observable<CandidateModel> {
    return this._httpClient.get<CandidateModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/candidates/' + id);
  }

  getAllStatuses(): Observable<StatusModel[]> {
    return this._httpClient.get<StatusModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/client-statuses');
  }

  update(candidate: CandidateModel): Observable<CandidateModel> {
    return this._httpClient.put<CandidateModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/candidates/' + candidate.id, candidate);
  }

  getAllSkills(): Observable<SkillsModel[]> {
    return this._httpClient.get<SkillsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/skills');
  }

  constructor(private _httpClient: HttpClient) {
  }


}
