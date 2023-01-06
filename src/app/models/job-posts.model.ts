import {JobTagsModel} from "./job-tags.model";

export interface JobPostsModel {
  title: string;
  description: string;
  jobTagIds: number[];
  jobTags: JobTagsModel[];
  jobTagsNames:string;
  id: string;

}



