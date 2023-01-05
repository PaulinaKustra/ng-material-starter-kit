export interface JobPostsModel {
  title: string;
  description: string;
  jobTagIds: any[];
  id: string;
  tags: Tags
}
export interface Tags{
  name: string;
  id: string;
  title: string;
  description: string;
  jobTagIds: number[];
}



