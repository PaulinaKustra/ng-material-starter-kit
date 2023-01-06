export interface InfluencersModel {
  name: string;
  avatar: string;
  followedBy: InfluencersModel[];
  id: string;
}
export interface FollowedBy {
  name: string;

}
